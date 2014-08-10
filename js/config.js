/**
 * RequireJS configuration
 */
(function () {
  require.config({

    // See: http://requirejs.org/docs/api.html#config-baseUrl
    baseUrl: "/",

    // Shims: Bridge non-AMD libraries to AMD by specifying deps and exports.
    // - `deps`: Array of RJS names of libraries that are depended on.
    // - `exports`: String name of `window.NAME` variable to export.
    //
    // See: http://requirejs.org/docs/api.html#config-shim
    shim: {
      "jquery": {
        exports: "$"
      },
      'backbone': {
          //These script dependencies should be loaded before loading
          //backbone.js
          deps: ['underscore', 'jquery'],
          //Once loaded, use the global 'Backbone' as the
          //module value.
          exports: 'Backbone'
      },
      'underscore': {
          exports: '_'
      },
      'firebase': {
        deps: ['backbone'],
        exports: 'Firebase'
      },
      'backfire': {
        deps: ['backbone', 'firebase'],
        exports: 'Backfire'
      }
    },

    // Maps: Specify aliases and specific libraries for plugins.
    //
    // See: http://requirejs.org/docs/api.html#config-map
    map: {},

    // Paths: Prefixes / full paths to find libraries.
    //
    // See: http://requirejs.org/docs/api.html#config-paths
    paths: {
      // Vendor libraries.
      "underscore": "bower_components/lodash/dist/lodash.underscore.min",
      "hbs": "bower_components/hbs/hbs",
      "jquery": "bower_components/jquery/dist/jquery.min",
      "backbone": "bower_components/backbone/backbone",
      "firebase": "bower_components/firebase/firebase",
      "backfire": "bower_components/backfire/backbone-firebase.min"

      // Application libraries.
      // Set up "app/" as base application prefix.
      // "app": "../app"
    }
  });
}());