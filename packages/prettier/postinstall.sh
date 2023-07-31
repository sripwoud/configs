#!/bin/bash

if [[ ! -f "$INIT_CWD/.prettierrc.yaml" ]];then
  echo "'@sripwoud/prettier-config'" > "$INIT_CWD/.prettierrc.yaml"
fi

cp -n .prettierignore "$INIT_CWD/.prettierignore"