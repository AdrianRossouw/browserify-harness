var Backbone = require('backbone');

var shared = require('./shared.js');

var account = new shared.models.Account({id: 'admin'});

account.set('attr', 'test');

console.log('test account model on server', account.toJSON());

module.exports = {
    account: account
};
