#!/bin/bash

# see sharing eslint config & npm scoped modules https://eslint.org/docs/latest/developer-guide/shareable-configs#npm-scoped-modules
if [[ ! -f  "$INIT_CWD/.eslintrc.yaml" ]];then
  echo "extends: ['@sripwoud']" > "$INIT_CWD/.eslintrc.yaml"
fi

cp -n .eslintignore "$INIT_CWD/.eslintignore"
