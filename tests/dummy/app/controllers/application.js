import Ember from 'ember';

export default Ember.Controller.extend({
  popupContent: function(marker) {
    return '<h1>Hello</h1>' +
           '<strong>Name:</strong> ' +
           marker.feature.properties.title +
           '<br/><strong>Address:</strong> ' + marker.feature.properties.description +
           '<br/><span style="color:red;">This is a red text.</span>';
  }
});
