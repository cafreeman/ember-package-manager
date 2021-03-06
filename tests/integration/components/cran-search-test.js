import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('cran-search', 'Integration | Component | cran search', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +
  this.set('itemsArray', []);

  this.render(hbs`{{cran-search packageList=itemsArray}}`);

  assert.equal(this.$().text().trim(), '');

  // assert.equal(this.$().text().trim(), 'template block text');
});
