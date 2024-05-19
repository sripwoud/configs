# Shared Configurations

- [dprint](./packages/dprint)
- [eslint](./packages/eslint)
- [eslint-jest](./packages/eslint-jest)
- [eslint-react](./packages/eslint-react)
- [jest](./packages/jest)
- _[prettier](./packages/prettier)_ (I don't rely on it anymore and prefer to use the [`dprint`](./packages/dprint) config instead)
- [tsconfig](./packages/tsconfig)

## Install

```shell
pnpm add -D @sripwoud/<package-name>
pnpm show @sripwoud/<package-name> peerDependencies --json | jq -r 'to_entries | map("\(.key)@\(.value)") | .[]' | xargs pnpm -Dw i
```
