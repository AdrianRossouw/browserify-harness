var $ = require('jquery');

var shared = require('./shared.js');

$.when(true).then(function() { console.log('server is working'); });

module.exports = {
    shared: shared,
    $: $
};
