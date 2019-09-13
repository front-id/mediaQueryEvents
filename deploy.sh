#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd sample

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:frontid/mediaQueryEvents.git master:gh-pages

cd -