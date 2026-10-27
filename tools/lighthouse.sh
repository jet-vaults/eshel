#!/bin/sh
# Lighthouse runs against the deployed site (dev helper).
#   tools/lighthouse.sh <base-url> <out-dir> [path...]
# Mobile uses Lighthouse's default (Moto G Power, slow 4G throttling); desktop uses --preset=desktop.
# The preview is intentionally noindex, which fails the SEO "is-crawlable" audit; summary.mjs reports
# SEO both with and without that single audit so the number is honest either way.
base=$1; out=$2; shift 2
[ $# -eq 0 ] && set -- / /projects/ /projects/kava/ /urban-renewal/ /about/
mkdir -p "$out"
export MSYS_NO_PATHCONV=1
LH="${LIGHTHOUSE:-npx --no-install lighthouse}"
for p in "$@"; do
  name=$(echo "$p" | sed 's#^/##; s#/$##; s#/#_#g'); [ -z "$name" ] && name=home
  for mode in mobile desktop; do
    extra=""; [ $mode = desktop ] && extra="--preset=desktop"
    $LH "$base$p" $extra --output=json --output=html --output-path="$out/$name-$mode" \
      --chrome-flags="--headless=new" --quiet --only-categories=performance,accessibility,best-practices,seo >/dev/null 2>&1 \
      ; [ -f "$out/$name-$mode.report.json" ] && echo "ok $name-$mode" || echo "FAILED $name-$mode"
  done
done
