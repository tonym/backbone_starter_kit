/**
 * @file main.view.js
 * @author Tony M
 * @alias ProductsView
 * @mixes ProductsPrototype
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'require.text!../templates/main.template.html',
  '../plugins/main.prototype'
], function(
  $,
  _,
  Backbone,
  mustache,
  mainTemplate,
  MainPrototype,
  jqueryForm
) {

  'use strict';

  var View = Backbone.View.extend({

    /**
     * Constructor
     *
     * @method
     */
    initialize : function(options) {

      var self = this;

      this.fetchTodos({
        complete : function() {
          console.log(self.todos);
          self.render();
        }
      });

      return this;

    },

    /**
     * Render the template and replace the #workspace HTML
     *
     * @method
     */
    render : function(options) {

      var self = this;

      var body = mustache.render(mainTemplate, {});

      var _options = {
        partial : body,
        complete : function() {
          self.trigger('rendered');
          self.start();
        }
      };

      this.replaceBody(_options);

      return this;

    },

    /**
     * One time event hanlders
     * start() binds event handlers, but is called
     * only once per instance
     *
     * @method
     */
    start : function() {

      // Event handlers go here

      return this;

    }

  });

  _.merge(View.prototype, MainPrototype);

  return View;

});
