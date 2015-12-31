import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('package-list', 'Integration | Component | package list', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{package-list}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#package-list}}
      template block text
    {{/package-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
