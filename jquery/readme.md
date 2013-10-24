jquery-harness
--------------

This repo tries to find the ideal way to package jquery with browserify.

this is one of the most common, yet one of the most painful packages to
package using browserify.

What makes this so painful is that jquery expects the dom to be present,
so there is no way to run it on the server unmodified.

The canonical node.js package ([jquery](https://npmjs.org/package/jquery)) therefor
wraps in jsdom to trick jquery into running on the server. This means it doesn't
even work on windows... This then also makes said package incompatible with the browser (and i have seen
browserify try to package jsdom).

To 'combat' this, they have another package called [jQuery](https://npmjs.org/package/jQuery)
packaged for the browser. The real fun here starts because OSX is case insensitive...
Version wise .. the numbering of the 'jquery' package is also a bit more complex.

It is more of a wrapper that goes and dynamically fetches a specific version
of jquery for you when you run it the first time.

Now once you assume you are going to be running jquery from different sources in the
two environments, things become a bit easier.


