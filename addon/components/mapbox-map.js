import Ember from 'ember';
import ajax from 'ic-ajax';
import layout from '../templates/components/mapbox-map';

export default Ember.Component.extend({
  layout: layout,
  model: null,
  markers: null,
  attributionControl: true,
  zoomControl: true,
  center: null,
  zoom: null,
  minZoom: null,
  maxZoom: null,
  maxBounds: null,
  popupContent: null,
  customIcons: false,

  didReceiveAttrs(){
    if(this.get('model')){
      return ajax({
        url: this.get('model'),
        type: 'get'
      }).then(results =>{
        this.set('markers', results);
      }, () =>{
        Ember.Logger.error('Failed to load markers from remote resource passed to \'model\' property.')
      });
    }
  },

  didInsertElement(){
    L.mapbox.accessToken = this.mapbox.get('accessToken');

    const options = this.getProperties('attributionControl', 'zoomControl', 'centerPosition', 'zoom', 'minZoom',
      'maxZoom', 'maxBounds');

    Ember.Mapbox.map = L.mapbox.map('map', this.mapbox.get('mapId'), options);
  },

  didRender(){
    if(Ember.Mapbox.markerLayer){
      Ember.Mapbox.markerLayer.clearLayers();
    }
    const markers = this.get('markers');
    Ember.Mapbox.markerLayer = L.mapbox.featureLayer(markers).addTo(Ember.Mapbox.map);
    if(!this.get('centerPosition')){
      Ember.Mapbox.map.fitBounds(Ember.Mapbox.markerLayer.getBounds());
    }
    Ember.Mapbox.markerLayer.eachLayer(marker =>{
      if(this.get('popupContent')){
        const popupContent = this.get('popupContent');
        marker.bindPopup(popupContent(marker));
      }
      if(this.get('customIcons')){
        marker.setIcon(L.icon(marker.feature.properties.icon));
      }
    });
  }
});
