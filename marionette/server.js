var App = require('./shared.js');

var Marionette = require('backbone.marionette');

App.addInitializer(function(opts) {
    var account = new App.Models.Account({id: opts.userId});
    account.set('attr', 'test');

    console.log('test account model on server', account.toJSON());
});

App.start({ userId: 'admin' });
