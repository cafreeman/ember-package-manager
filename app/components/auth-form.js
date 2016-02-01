import Ember from 'ember';
import EmberValidations from 'ember-validations';

// export default Ember.Component.extend({
export default Ember.Component.extend(EmberValidations, {
  signUpForm: false,

  firstName: null,
  lastName: null,
  email: null,
  password: null,
  passwordConfirmation: null,

  validations: {
    firstName: {
      presence: {
        if: 'signUpForm',
        message: 'You must provide your first name.'
      }
    },
    lastName: {
      presence: {
        'if': 'signUpForm',
        message: 'You must provide your last name.'
      }
    },
    email: {
      presence: {
        message: 'You must provide an email address.'
      },
      format: {
        with: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        message: 'The email you provided is invalid.'
      },
    },
    password: {
      length: {
        minimum: 6,
        message: 'Your password must be at least 6 characters.'
      },
      confirmation: {
        'if': 'signUpForm',
        message: 'Passwords must match.'
      }
    },
    passwordConfirmation: {
      presence: {
        'if': 'signUpForm'
      }
    }
  },

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
