/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-mapbox-map',

  included: function(app){
    this._super.included(app);
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.js');
    app.import(app.bowerDirectory + '/mapbox.js/mapbox.css');
    var images = [
      'icons.svg',
      'icons-000000@2x.png',
      'icons-ffffff@2x.png',
      'layers.png',
      'layers-2x.png',
      'marker-icon.png',
      'marker-icon-2x.png',
      'marker-shadow.png'
    ];
    images.forEach(function(image){
      app.import(app.bowerDirectory + '/mapbox.js/images/' + image, {
        destDir: 'assets/images/'
      });
    });
  }
};
