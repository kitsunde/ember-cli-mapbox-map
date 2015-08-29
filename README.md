# ember-cli-mapbox-map
[![Code Climate](https://codeclimate.com/github/igorpreston/ember-cli-mapbox-map/badges/gpa.svg)](https://codeclimate.com/github/igorpreston/ember-cli-mapbox-map)

This addon is a go-to solution to include and configure [Mapbox.js](https://www.mapbox.com/mapbox.js/) library into Ember and easily use it as a native component.

## Installation

```
ember install ember-cli-mapbox-map
```

## Initial configuration
In order to make this addon work properly for you, you need to define __accessToken__ and __mapId__ in your __config/environment.js__:
```
ENV['mapbox'] = {
    accessToken: 'YOUR_MAPBOX_TOKEN_HERE',
    mapId: 'YOUR_MAPBOX_MAP_ID_HERE'
  };
```

## Using mapbox as a component
Include mapbox component in any template where you would like to display a map.
```
{{mapbox-map
  model='http://getyourmarkers.com'
  attributionControl=false
  zoomControl=false}}
```

## Mapbox map customization
The component provides you with a lot of attributes that you can change to customize the map and its data.

### Map controls
#### attributionControl
This property is used to display default Mapbox attributions at the bottom corner on the map. Defaults to __true__. Pass __false__ if you don't want to display Mapbox and OpenStreetMap mentions.
```
{{mapbox-map attributionControl=false}}
```
#### zoomControl
This property is used to display zoom controls on the map. Defaults to __true__. Pass __false__ if you don't want to display zoom controls.
```
{{mapbox-map zoomControl=false}}
```

### Map model
The component has its own model, like your Ember.Route. This model is data which contains markers in __GeoJSON__ format to display on the map. You should pass to __model__ property a path on your API, where mapbox component can grab markers from.

#### Passing remote path of model to a component
```
{{mapbox-map model='/markers'}}
```
will result into querying to http://yourdomain.com/markers.
```
{{mapbox-map model='http://anotherdomain.com/markers'}}
```
will result into query to http://anotherdomain.com/markers.

#### Passing model directly to a component
You can also get markers from your backend API or any other location in model hook on your route and then pass this loaded model into a component.
```
export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('marker');
  }
});
```
And then pass to a __markers__ property on a component.
```
{{mapbox-map markers=model}}
```
Or if you have defined marker in the property on your controller:
```
export default Ember.Controller.extend({
  markers: {
  // ...
  }
});
```
You can then pass controller's property to a component:
```
{{mapbox-map markers=markers}}
```

## Icon customization of the marker
If you have custom image for marker, then you can specify it in `mapbox-map` component and it automatically will replace default icons with your shiny ones. By default, __customIcons__ property is __false__.
```
{{mapbox-map customIcons=true}}
```

## Custom popup content
You can also customize the way your template is displayed inside popups when you click on a marker. In order to do this, you should define __popupContent__ property on your controller and pass it to the `mapbox-map` component.
```
export default Ember.Controller.extend({
  popupContent: function(marker) {
    return '<h1>Hello</h1>' +
           '<strong>Name:</strong> ' +
           marker.feature.properties.title +
           '<br/><strong>Address:</strong> ' + marker.feature.properties.description +
           '<br/><span style="color:red;">This is a red text.</span>';
  }
});
```
```
{{mapbox-map popupContent=popupContent}}
```

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
