/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox',

  contentFor: function(type) {
    if (type === 'head-footer') {
      return "<link href='https://api.mapbox.com/mapbox.js/v2.2.1/mapbox.css' rel='stylesheet' />";
    };

    if (type === 'body-footer') {
      return "<script src='https://api.mapbox.com/mapbox.js/v2.2.1/mapbox.js'></script>";
    };
  }
};
