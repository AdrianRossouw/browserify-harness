#!/bin/sh

# all in a bundle
browserify client.js > build/bundle.js

# split bundles
browserify -r jquery > build/vendor.js
browserify -x jquery client.js > build/client.js

# merged bundle
cat build/vendor.js build/client.js > build/all.js

# templates
jade -O "{version:'bundle'}" < index.jade > build/bundle.html
jade -O "{version:'split'}" < index.jade > build/split.html
jade -O "{version:'merged'}" < index.jade > build/merged.html
