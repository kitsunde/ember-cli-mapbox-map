import Mapbox from '../services/mapbox';

export function initialize(registry, application) {
  registry.register("mapbox:main", Mapbox);
  application.inject('route', 'mapbox', 'mapbox:main');
  application.inject('controller', 'mapbox', 'mapbox:main');
  application.inject('component:mapbox-map', 'mapbox', 'mapbox:main');
}

export default {
  name: 'mapbox',
  initialize: initialize
};
