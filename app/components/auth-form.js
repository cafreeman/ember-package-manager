import Ember from 'ember';

export default Ember.Component.extend({
  signUpForm: false,

  actions: {
    toggleSignUpForm() {
      this.toggleProperty('signUpForm');
    },
    login() {
      let loginInfo = this.getProperties('email', 'password');
      this.sendAction('on-submit', true, loginInfo);
    },
    signUp() {
      let signupInfo = this.getProperties(
        'firstName',
        'lastName',
        'email',
        'password',
        'confirmPassword'
      );
      this.sendAction('on-submit', false, signupInfo);
    }
  }
});
