browserify-harness
==================

I have grown tired of being constantly bitten by packaging gotchas, but
more frustratingly running into them in my applications. Trying to debug
and fix misbehaving packages is complex enough without your application
getting in the way of that.

That's what this repo is all about.

I am going to be using it as a 'clean room' to find the most correct
way to package specific code for the client.

I will try to document such edge cases as :

* missing or incorrect package.json files requiring a fork.
* wether to source code from npm, bower or github repos.
* make sure dependencies get correctly bundled.
* which transforms to use on the package.
* wether it needs a shim.
* strange aliasing requirements.

I will also most likely be building a series of tests that will
uniformly test all the included libraries.
