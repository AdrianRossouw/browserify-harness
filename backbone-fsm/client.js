var Backbone = require('backbone');
var $ = require('jquery');

// needed for view rendering
Backbone.$ = $;

var shared = require('./shared.js');

var View = Backbone.View.extend({
    initialize: function(opts) {
        this.model.on('transition:stop:verify', function(transition) {
            this.$el.append('<div>new state:' + transition.to + '</div>');
        }, this);
    },
    className: 'view',
    render: function() {
        this.$el.html('<h1>backbone-fsm is working</div>');
        this.$el.append('<div>current state: ' + this.model.getCurrentState() + '</div>');
        this.model.transitionTo('verified');
    }
});


var _view = new View({
    model: new shared.models.Account({id: 'admin'}),
    el: $('#content')
});

_view.render();

