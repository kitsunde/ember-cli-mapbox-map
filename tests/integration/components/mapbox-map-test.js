/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'mapbox-map',
  'Integration: MapboxMapComponent',
  {
    integration: true
  },
  function(){
    it('renders', function(){
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#mapbox-map}}
      //     template content
      //   {{/mapbox-map}}
      // `);

      this.render(hbs`{{mapbox-map}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
