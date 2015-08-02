import Ember from 'ember';

export default Ember.Controller.extend({
  popupContent: Ember.computed(function() {
    return '<h1>Hello</h1>' + '<br/>' + '<span style="color:red;">This is red text</span>';
  })
});
