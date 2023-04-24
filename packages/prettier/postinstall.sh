#!/bin/bash
#echo "HERE"
if [[ ! -f "$INIT_CWD/.prettierrc.yaml" ]];then
  echo "'@3pwd/prettier-config'" > "$INIT_CWD/.prettierrc.yaml"
fi

cp -n .prettierignore "$INIT_CWD/.prettierignore"