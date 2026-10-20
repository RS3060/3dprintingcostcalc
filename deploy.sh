#!/usr/bin/env bash
# ==============================================================================
# Deploy Script for 3DPrintingCostCalc.com
# Automated pre-flight checks, Astro static build, artifact verification,
# and multi-target deployment (GitHub Pages, Cloudflare, Netlify, Vercel, Preview).
# ==============================================================================

set -euo pipefail

# ANSI Color codes
BOLD="\033[1m"
GREEN="\033[0;32m"
CYAN="\033[0;36m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
RESET="\033[0m"

log_info() {
  echo -e "${CYAN}${BOLD}[INFO]${RESET} $1"
}

log_success() {
  echo -e "${GREEN}${BOLD}[SUCCESS]${RESET} $1"
}

log_warn() {
  echo -e "${YELLOW}${BOLD}[WARNING]${RESET} $1"
}

log_error() {
  echo -e "${RED}${BOLD}[ERROR]${RESET} $1" >&2
}

print_header() {
  echo -e "${CYAN}${BOLD}"
  echo "=========================================================="
  echo "   3DPrintingCostCalc.com Production Deployment Engine    "
  echo "=========================================================="
  echo -e "${RESET}"
}

print_usage() {
  echo "Usage: ./deploy.sh [OPTIONS]"
  echo ""
  echo "Options:"
  echo "  --target, -t <target>   Deployment target:"
  echo "                          - preview | dry-run   (Build and verify without publishing)"
  echo "                          - gh-pages | github   (Deploy dist/ to gh-pages branch)"
  echo "                          - cloudflare          (Deploy to Cloudflare Pages via wrangler)"
  echo "                          - netlify             (Deploy to Netlify via netlify-cli)"
  echo "                          - vercel              (Deploy to Vercel via vercel-cli)"
  echo "                          - custom              (Run \$DEPLOY_COMMAND)"
  echo "                          [Default: dry-run]"
  echo "  --skip-check            Skip git clean working tree check"
  echo "  --help, -h              Show this help message"
  echo ""
  echo "Examples:"
  echo "  ./deploy.sh --target preview"
  echo "  ./deploy.sh --target gh-pages"
  echo "  ./deploy.sh --target cloudflare"
}

TARGET="dry-run"
SKIP_CHECK=false

# Parse command line flags
while [[ $# -gt 0 ]]; do
  case "$1" in
    --target|-t)
      TARGET="${2:-}"
      shift 2
      ;;
    --skip-check)
      SKIP_CHECK=true
      shift
      ;;
    --dry-run)
      TARGET="dry-run"
      shift
      ;;
    --help|-h)
      print_usage
      exit 0
      ;;
    *)
      log_error "Unknown option: $1"
      print_usage
      exit 1
      ;;
  esac
done

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

print_header

# ------------------------------------------------------------------------------
# 1. Pre-flight Environment Checks
# ------------------------------------------------------------------------------
log_info "Running pre-flight checks..."

# Check Node version (engine requirement: >=22.22.0)
NODE_VER=$(node -v | sed 's/v//')
log_info "Detected Node.js version: v${NODE_VER}"

# Check git status if requested
if [[ "$SKIP_CHECK" = false ]] && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  if [[ -n $(git status --porcelain) ]]; then
    log_warn "Working directory has uncommitted modifications."
  else
    log_success "Git working directory is clean."
  fi
fi

# ------------------------------------------------------------------------------
# 2. Build Assets
# ------------------------------------------------------------------------------
log_info "Ensuring high-resolution social assets are generated..."
if [[ -f ".agents/generate_assets.js" ]]; then
  node .agents/generate_assets.js
fi

log_info "Executing production Astro build..."
npm run build

# ------------------------------------------------------------------------------
# 3. Artifact Validation & Health Audit
# ------------------------------------------------------------------------------
log_info "Validating production build artifacts in dist/..."

DIST_DIR="$SCRIPT_DIR/dist"

REQUIRED_FILES=(
  "index.html"
  "404.html"
  "robots.txt"
  "sitemap-index.xml"
  "sitemap-0.xml"
  "og-image.png"
  "apple-touch-icon.png"
  "site.webmanifest"
)

ALL_PASSED=true
for file in "${REQUIRED_FILES[@]}"; do
  if [[ -f "$DIST_DIR/$file" ]]; then
    echo -e "  ${GREEN}✓${RESET} dist/$file found ($(du -h "$DIST_DIR/$file" | cut -f1))"
  else
    echo -e "  ${RED}✗${RESET} dist/$file MISSING!"
    ALL_PASSED=false
  fi
done

if [[ "$ALL_PASSED" = false ]]; then
  log_error "Artifact validation failed! Required files are missing from dist/."
  exit 1
fi

PAGE_COUNT=$(find "$DIST_DIR" -name "*.html" | wc -l)
log_success "Verified $PAGE_COUNT static HTML pages generated successfully."

# Verify robots.txt contains sitemap
if grep -q "sitemap-index.xml" "$DIST_DIR/robots.txt"; then
  log_success "robots.txt verified with valid sitemap directive."
else
  log_warn "robots.txt might not contain reference to sitemap-index.xml."
fi

# Verify 404 is excluded from sitemap
if grep -qi "404" "$DIST_DIR/sitemap-0.xml"; then
  log_warn "404 page detected in sitemap! It should be excluded."
else
  log_success "404 page correctly excluded from sitemap."
fi

# ------------------------------------------------------------------------------
# 4. Target Deployment Execution
# ------------------------------------------------------------------------------
case "$TARGET" in
  preview|dry-run|local)
    log_success "Build & artifact validation completed successfully!"
    log_info "Target set to '${TARGET}'. Dry run complete; no remote deployment performed."
    log_info "To preview the build locally, run: npm run preview"
    ;;

  gh-pages|github)
    log_info "Deploying to GitHub Pages branch (gh-pages)..."
    if ! command -v git &>/dev/null; then
      log_error "git is required for gh-pages deployment."
      exit 1
    fi
    npx -y gh-pages -d dist -m "Deploy 3DPrintingCostCalc.com [skip ci]"
    log_success "Successfully deployed to gh-pages branch!"
    ;;

  cloudflare)
    log_info "Deploying to Cloudflare Pages..."
    npx -y wrangler pages deploy dist --project-name="3dprintingcostcalc"
    log_success "Successfully deployed to Cloudflare Pages!"
    ;;

  netlify)
    log_info "Deploying to Netlify Production..."
    npx -y netlify-cli deploy --prod --dir=dist
    log_success "Successfully deployed to Netlify!"
    ;;

  vercel)
    log_info "Deploying to Vercel Production..."
    npx -y vercel --prod
    log_success "Successfully deployed to Vercel!"
    ;;

  custom)
    if [[ -z "${DEPLOY_COMMAND:-}" ]]; then
      log_error "Custom target selected but DEPLOY_COMMAND environment variable is not set."
      exit 1
    fi
    log_info "Executing custom deploy command: $DEPLOY_COMMAND"
    eval "$DEPLOY_COMMAND"
    log_success "Custom deployment executed successfully!"
    ;;

  *)
    log_error "Unknown deployment target: $TARGET"
    print_usage
    exit 1
    ;;
esac

echo ""
log_success "All tasks completed successfully."
