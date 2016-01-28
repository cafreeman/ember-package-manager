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
    },
    signUp() {
      console.log('signing up!')
    }
  }
});
