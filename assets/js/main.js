/**
 * main.js
 */

_.templateSettings = {
  'interpolate': /{{([\s\S]+?)}}/g
};

var AppModel = Backbone.Model.extend({

  defaults: {
    id: '',
    introduction: ''
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

      self.control.prop('disabled', false).html('Introductions, please');

      self.control.on('click', function() {
        self.render();
      });

    });

  },

  render: function() {

    var tmpl = Mustache.to_html(this.template, this.appCollection.at(0).toJSON());

    this.$el.html(tmpl);

    return this;

  }

});

var appView = new AppView();