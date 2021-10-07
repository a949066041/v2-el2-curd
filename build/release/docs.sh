# 确保脚本抛出遇到的错误
set -e

git add .

git commit -m 'update page'

git push

yarn build:docs

cd dist

git init

git add .

git commit -m '文档修正'

git config user.name wangsh

git config user.email 949066041@qq.com

git push -f git@github.com:a949066041/v2-el2-curd.git master:gh-pages

cd -