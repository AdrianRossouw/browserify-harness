// shared setup code

var Backbone = require('backbone');

var models = {};

models.Account = Backbone.Model.extend({

});

models.Accounts = Backbone.Collection.extend({
    model: models.Account
});

module.exports = {
    Backbone: Backbone,
    models: models
};
