import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('auth-form', 'Integration | Component | auth form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{auth-form}}`);
  assert.equal(this.$('h3').text().trim(), 'Please Login or Sign Up', 'Call to action renders');

  // Test the login form
  let formElements = this.$('.form-group');
  assert.equal(formElements.length, 2, 'Login form has the correct number of inputs');

  let labels = formElements.map((i, e) => this.$(e).text().trim()).toArray();
  assert.deepEqual(labels, ['Email', 'Password'], 'Login form has the correct input fields');

  // Test validation states

  // Type an incorrect email in the login form and trigger validation
  this.$('#login-email-').val('abc').focusout();
  assert.ok(this.$('#login-email').hasClass('has-error'), 'Email input throws error when incorrect');
  assert.ok(this.$('#login-email').hasClass('has-feedback'), 'Email input has feedback after focusout');

  // Type an incorrect password in the login form and trigger validation
  this.$('#login-password-').val('pass').focusout();
  assert.ok(this.$('#login-password').hasClass('has-error'), 'Password input throws error when incorrect');
  assert.ok(this.$('#login-password').hasClass('has-feedback'), 'Password input throws error when incorrect');

  // Trigger change to signup form
  this.$('.trigger-signup-form').click();

  formElements = this.$('.form-group');
  assert.equal(formElements.length, 5, 'Signup form has the correct number of inputs');

  labels = formElements.map((i, e) => this.$(e).text().trim()).toArray();
  assert.deepEqual(labels,
    ['First Name', 'Last Name', 'Email', 'Password', 'Confirm Password'],
    'Signup form has the correct input fields'
  );

  // Type incorrect values in the signup form and trigger validation
  this.$('#signup-first-name-').val('').focusout();
  assert.ok(this.$('#signup-first-name').hasClass('has-error'), 'First name input throws error when incorrect');
  assert.ok(this.$('#signup-first-name').hasClass('has-feedback'), 'First name input has feedback after focusout');

  this.$('#signup-email-').val('abcd').focusout();
  assert.ok(this.$('#signup-email').hasClass('has-error'), 'Signup email input throws error when incorrect');
  assert.ok(this.$('#signup-email').hasClass('has-feedback'), 'Signup email input has feedback after focusout');

  // test password validations
  this.$('#signup-password-').val('abcd').focusout();
  assert.ok(this.$('#signup-password').hasClass('has-error'), 'Password input throws error when too short');
  assert.ok(this.$('#signup-password').hasClass('has-feedback'), 'Password input has feedback after focusout');

  // now enter the correct length password and check that validations pass
  this.$('#signup-password-').val('abcdefg').focusout();
  assert.ok(this.$('#signup-password').hasClass('has-success'), 'Password input shows success when correct length');
  assert.ok(this.$('#signup-password').hasClass('has-feedback'), 'Password input has feedback after focusout with success');

  // test password confirmation
  this.$('#signup-password-confirm-').val('').focusout();
  assert.ok(this.$('#signup-password-confirm').hasClass('has-error'), "Password confirm errors when passwords don't match");
  this.$('#signup-password-confirm-').val('abcdefg').focusout();
  assert.ok(this.$('#signup-password-confirm').hasClass('has-success'), "Password confirm succeeds when passwords match");
});
