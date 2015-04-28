/**
 * @file teams.model.js
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

  var Model = Backbone.Model.extend({

    idAttribute : 'team_id',

    defaults: {
      abbreviation: 'PHI',
      active: true,
      city: 'Philadelphia',
      conference: 'National',
      division: 'East',
      first_name: 'Philadelphia',
      full_name: 'Philadelphia Phillies',
      last_name: 'Phillies',
      site_name: 'Citizens Bank Park',
      state: 'Pennsylvania',
      team_id: 'philadelphia-phillies'
    }

  });

  return Model;

});