/**
 * @file teams.view.js
 * @author Tony M
 */

define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  '../collections/teams.collection',
  'require.text!../templates/teams.template.html'
], function(
  $,
  _,
  Backbone,
  Mustache,
  TeamsCollection,
  teamsTemplate
) {

  'use strict';

  var View = Backbone.View.extend({

    el : '#workspace-body',

    teams : {},

    initialize: function() {

      var self = this;

      this.teams = new TeamsCollection();

      this.teams.fetch({
        success : function() {
          self.render();
        }
      });

    },

    render: function() {

      var tmpl = Mustache.to_html(teamsTemplate, { teams : this.teams.toJSON() });

      this.$el.html(tmpl);

      return this;

    }

  });

  return View;

});