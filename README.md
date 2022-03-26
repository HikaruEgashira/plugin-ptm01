# WP Plugin for ptm01

## development

1. install nix
2. install direnv

```bash
direnv allow # install development packages
pnpm install
pnpm wp-env start # start development server
pnpm start # open http://localhost:8888
```

## build package

```bash
pnpm build
pnpm plugin-zip # ptm01.zip
```
