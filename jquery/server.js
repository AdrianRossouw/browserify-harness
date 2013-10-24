var $ = require('jquery');

require('./shared.js');

$.when(true).then(function() { console.log('server is working'); });
