// shared setup code

var Backbone   = require('backbone');
var Marionette = require('backbone.marionette');
var _          = require('underscore');

// Sidestep jquery being required on the server
Marionette.$ = function() {};
_.extend(Marionette.$, require('underscore.deferred'));

var App = new Marionette.Application();

App.module('Models', function() {
    this.Account = Backbone.Model.extend({});
});

App.module('Models', function(models) {
    models.Accounts = Backbone.Collection.extend({
        model: models.Account
    });
});

App.module('State', function(state) {
    this.startsWithParent = false;

    this.addInitializer(function(opts) {
        this.account = new App.Models.Account({id: opts.userId});
    });
});

module.exports = App;
