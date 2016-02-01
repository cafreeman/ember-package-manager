import Ember from 'ember';

export default Ember.Component.extend({
  signUpForm: false,

  actions: {
    toggleSignUpForm() {
      this.toggleProperty('signUpForm');
    },
    login() {
      let loginInfo = this.getProperties('email', 'password');
      this.get('on-submit')(true, loginInfo);
    },
    signUp() {
      let signupInfo = this.getProperties(
        'firstName',
        'lastName',
        'email',
        'password',
        'confirmPassword'
      );
      this.get('on-submit')(false, signupInfo);
    }
  }
});
