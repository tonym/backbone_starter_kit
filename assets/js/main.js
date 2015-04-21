/**
 * main.js
 */

_.templateSettings = {
  'interpolate': /{{([\s\S]+?)}}/g
};

var AppModel = Backbone.Model.extend({

});

var AppCollection = Backbone.Collection.extend({

});

var AppView = Backbone.View.extend({

  el: $('#workspace'),

  control: $('#btn-updater'),

  template: _.template("<h3>Hello {{ who }}</h3>"),

  initialize: function() {

    var self = this;

    this.control.on('click', function() {
      self.render();
    });

  },

  render: function() {

    this.$el.html(this.template({who: 'world!'}));

    return this;

  }

});

$(document).ready(function() {

  var appView = new AppView();

});