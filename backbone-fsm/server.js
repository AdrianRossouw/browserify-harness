var Backbone = require('backbone');

var shared = require('./shared.js');

var account = new shared.models.Account({id: 'admin'});


account.on('transition:stop:verify', function(transition) {
    console.log('new state:' + transition.to);
}, this);

console.log('initial state', account.getCurrentState());
account.transitionTo('verified');


module.exports = {
    account: account
};
