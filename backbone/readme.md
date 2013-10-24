backbone-harness
----------------

This is a lot simpler once you already have the whole jquery fracas under
the wing.

backbone itself has a dependency on jquery for various things, but you
can actually go a really really far way on the server without adding it.

The 2 places that require it are when you define/instantiate/render views,
and when you try to the use the default Backbone.sync method (which uses $.Ajax)

this harness ignores the whole server-side rendering thing as out of scope...

what to do
----------

1. npm install --save jquery-browserify backbone
1. add this to package.json

    {
        "browser": {
            "jquery": "jquery-browserify"
        }
    }

