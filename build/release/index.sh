#!/usr/bin/env sh
set -e

git add -A
git commit -m 'build release'
git push

npm version patch

yarn build

npm publish --registry http://localhost:4873/