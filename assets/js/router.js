/**
 * @file router.js
 * @author Tony M
 */

define([
  'jquery',
  'underscore',
  'backbone'
], function(
  $,
  _,
  Backbone
) {

  'use strict';

  var Router = Backbone.Router.extend({

    routes : {
      'baseball/teams' : 'baseballTeamsAction',
      '*actions'       : 'defaultAction'
    },

    initialize : function() {

      var self = this;

      this.on('route:baseballTeamsAction', function() {
        require(['js/amd/baseball/views/teams.view'], function(BaseballTeamsView) {
          var baseballTeamsView = new BaseballTeamsView();
        });
      });

      this.on('route:defaultAction', function() {
        require(['js/amd/baseball/views/teams.view'], function(BaseballTeamsView) {
          var baseballTeamsView = new BaseballTeamsView();
        });
      });

      Backbone.history.start({ pushState : self.hasPushState() });

    },

    hasPushState : function() {

      var ret = false;

      if(typeof history.pushState === 'function') {
        ret = true;
      }

      return ret;

    }


  });

  return Router;

});