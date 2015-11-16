import Ember from 'ember';

export function initialize(appInstance){
  const config = appInstance.resolveRegistration('config:environment');
  const service = appInstance.lookup('mapbox:main');
  service.set('accessToken', config.mapbox.accessToken);
  service.set('mapId', config.mapbox.mapId);

  Ember.Mapbox = Ember.Namespace.create({});
}

export default {
  name: 'mapbox',
  initialize: initialize
};
