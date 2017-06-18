#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

ng build --prod

ngu-sw-manifest --out dist/ngsw-manifest.json

cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

