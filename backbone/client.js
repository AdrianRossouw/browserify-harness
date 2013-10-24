var Backbone = require('backbone');
var $ = require('jquery');

var shared = require('./shared.js');

var View = Backbone.View.extend({
    className: 'view',
    render: function() {
        this.$el.html('<h1>backbone is working</div>');
        this.$el.append('<div>id is ' + this.model.id + '</div>');
    }
});


var _view = new View({
    model: new shared.models.Account({id: 'admin'}),
    el: $('#content')
});

_view.render();

