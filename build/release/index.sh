#!/usr/bin/env sh
set -e

# git checkout master
# git merge dev

VERSION=`npx select-version-cli`

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r