#!/bin/sh

# all in a bundle
browserify client.js > build/bundle.js

# split bundles
browserify -r jquery -r underscore -r underscore.deferred -r backbone -r backbone.marionette > build/vendor.js
browserify -x jquery -x underscore -x underscore.deferred -x backbone -x backbone.marionette -r ./shared > build/shared.js
browserify -x jquery -x underscore -x underscore.deferred -x backbone -x backbone.marionette -x ./shared client.js > build/client.js

# merged bundle
cat build/vendor.js build/shared.js build/client.js > build/all.js

# templates
jade -O "{version:'bundle'}" < index.jade > build/bundle.html
jade -O "{version:'split'}" < index.jade > build/split.html
jade -O "{version:'merged'}" < index.jade > build/merged.html
