/**
 * @file teams.collection.js
 * @author Tony M
 */

define([
  'jquery',
  'underscore',
  'backbone',
  '../models/teams.model'
], function(
  $,
  _,
  Backbone,
  TeamsModel
) {

  'use strict';

  var Collection = Backbone.Collection.extend({

    model: TeamsModel,
    url: '/assets/data/baseball.teams.json'

  });

  return Collection;

});
