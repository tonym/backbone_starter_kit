(function() {

  'use strict';

  require.config({

    baseUrl : '/assets',

    paths : {
      'backbone'                     : 'app/lib/backbone/backbone',
      'bootstrap'                    : 'app/lib/bootstrap/dist/js/bootstrap.min',
      'jquery'                       : 'app/lib/jquery/dist/jquery.min',
      'mustache'                     : 'app/lib/mustache/mustache',
      'require.text'                 : 'app/lib/require_text/text',
      'underscore'                   : 'app/lib/lodash/dist/lodash.min'
    },

    shim : {
      'backbone' : {
        deps : ['jquery', 'underscore']
      },
      'bootstrap' : {
        deps : ['backbone']
      }
    },

    waitSeconds : 0

  });

  require(['js/router'], function(Router) {
    new Router();
  });

}());