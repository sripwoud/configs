# Shared Configurations

- [dprint](./packages/dprint)

## Install

```shell
pnpm add -D @sripwoud/<package-name>
pnpm show @sripwoud/<package-name> peerDependencies --json | jq -r 'to_entries | map("\(.key)@\(.value)") | .[]' | xargs pnpm -Dw i
```
