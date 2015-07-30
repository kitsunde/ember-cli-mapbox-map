export function initialize(instance) {
  let config = instance.container.lookupFactory('config:environment');
  let service = instance.container.lookup('mapbox:main');
  service.set('accessToken', config.mapbox.accessToken);
  service.set('mapId', config.mapbox.mapId);
  service.set('mapTag', config.mapbox.mapTag);
}

export default {
  name: 'mapbox',
  initialize: initialize
};
