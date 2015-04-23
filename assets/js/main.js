/**
 * main.js
 */

_.templateSettings = {
  'interpolate': /{{([\s\S]+?)}}/g
};

var AppModel = Backbone.Model.extend({

  defaults: {
    id: '',
    who: 'world!'
  }

});

var AppCollection = Backbone.Collection.extend({

  model: AppModel,
  url: '/assets/data/classnotes.json'

});

var AppView = Backbone.View.extend({

  appCollection: new AppCollection(),

  el: $('#workspace'),

  control: $('#btn-updater'),

  template: $('#template').html(),

  initialize: function() {

    var self = this;

    this.appCollection.fetch({
      reset : true
    });

    this.appCollection.on('reset', function() {

      self.control.prop('disabled', false).html('Who are you?');

      self.control.on('click', function() {
        self.render();
      });

    });

  },

  render: function() {

    var tmpl = _.template(this.template, this.appCollection.at(0).toJSON());

    this.$el.append(tmpl);

    return this;

  }

});

$(document).ready(function() {

  var appView = new AppView();

});