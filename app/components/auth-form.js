import Ember from 'ember';

export default Ember.Component.extend({
  signUpForm: false,

  actions: {
    toggleSignUpForm() {
      this.toggleProperty('signUpForm');
    },
    login() {
      this.sendAction('on-submit', true);
    },
    signUp() {
      this.sendAction('on-submit', false);
    },
  }
});
