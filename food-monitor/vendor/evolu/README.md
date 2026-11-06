# Evolu bundle (self-hosted)

Built once with esbuild from `@evolu/common@8.27.1` and `@evolu/web@3.7.0`.
Workers (`js/*.worker.js`) and `wasm/sqlite3.wasm` sit where Evolu's own
`new URL(…, import.meta.url)` expects them, so no patching is needed.

Rebuild (from an empty folder, copy `entry.js` there first):

```sh
npm i @evolu/common@8.27.1 @evolu/web@3.7.0 esbuild
npx esbuild entry.js node_modules/@evolu/web/dist/src/local-first/{Db,Shared}.worker.js \
  --bundle --format=esm --splitting --minify --target=es2022 --platform=browser \
  --outdir=js --entry-names=[name] --chunk-names=chunk-[hash]
mv js/entry.js js/evolu.js
cp node_modules/@evolu/sqlite-wasm/dist/wasm/sqlite3.wasm wasm/
```
