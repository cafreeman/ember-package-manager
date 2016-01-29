import Ember from 'ember';

export default Ember.Component.extend({
  signUpForm: false,

  actions: {
    toggleSignUpForm() {
      this.toggleProperty('signUpForm');
      console.log(this.get('signUpForm'));
    },
    login() {
      console.log('logging in!');
      this.sendAction('on-submit', true);
    },
    signUp() {
      console.log('signing up!')
      this.sendAction('on-submit', false);
    },
  }
});
