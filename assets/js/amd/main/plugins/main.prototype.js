/**
 * @file main.prototype.js
 * @alias SupportPrototype
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'app.core',
  '../collections/main.collection'
], function(
  $,
  _,
  Backbone,
  AppCore,
  MainCollection
) {

  'use strict';

  var Prototype = {

    api : {
      todos : '/assets/data/classnotes.json'
    },

    fetchTodos : function(options) {

      var _options = this.prepareOptions(options);

      this.todos = new MainCollection();

      this.todos.url = this.api.todos;

      return this._fetchData('todos', _options);

    },

    /**
     * Wrapper for _prepareOptions
     * Since options are always optional, use
     * a wrapper for _prepareOptions so defaults
     * can be added.
     *
     * @method
     * @param {object} (options)
     */
    prepareOptions : function(options) {

      var defaults = { reset : true,
                       unshift : false,
                       dataType : 'json' };

      return this._prepareOptions(defaults, options);

    }

  };

  _.merge(Prototype, AppCore);

  return Prototype;

});