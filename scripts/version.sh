#!/usr/bin/env bash
set -euo pipefail

function main() {
  local CMD="pnpm version --no-git-tag-version "

  case "$1" in
  "major" | "minor" | "patch")
    CMD+="$1"
    ;;
  *)
    echo "no match"
    exit 1
    ;;
  esac

  eval "$CMD"
}

main "$@"
