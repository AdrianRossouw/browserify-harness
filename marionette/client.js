var App = require('./shared.js');
var Backbone = require('backbone');
var Marionette = require('backbone');

Backbone.$ = Marionette.$ = Backbone.Marionette.$ = require('jquery');

App.module('Views', function(views) {
    views.MainView = Backbone.Marionette.ItemView.extend({
        template: '#template'
    });
});

App.addInitializer(function(opts) {
    App.State.start(opts);

    this.addRegions({ 'content': '#content' });

    this.content.show(new App.Views.MainView({
        model: App.State.account
    }));
});

App.start({ userId: 'admin' });
