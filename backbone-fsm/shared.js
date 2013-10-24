// shared setup code

var Backbone = require('backbone');
var FSM = require('backbone-fsm');

var models = {};

models.Account = Backbone.Model.extend({
    initialize: function(opts) {
        FSM.mixin(this);
        this.on('transition:start', function(transition) {
            this.trigger('transition:start:'+transition.name, transition);
        }, this);
        this.on('transition:stop', function(transition) {
            this.trigger('transition:stop:'+transition.name, transition);
        }, this);

    },
    defaultState: 'created', 
    transitions: {
        'verify': {
            from: 'created',
            to: 'verified'
        }
    }
});

module.exports = {
    Backbone: Backbone,
    models: models
};
