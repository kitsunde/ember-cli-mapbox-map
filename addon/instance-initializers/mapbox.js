import Ember from 'ember';

export function initialize(instance) {
  let config = instance.container.lookupFactory('config:environment');
  let service = instance.container.lookup('mapbox:main');
  service.set('accessToken', config.mapbox.accessToken);
  service.set('mapId', config.mapbox.mapId);

  Ember.Mapbox = Ember.Namespace.create({

  });
}

export default {
  name: 'mapbox',
  initialize: initialize
};
