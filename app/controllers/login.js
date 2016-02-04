import Ember from 'ember';

export default Ember.Controller.extend({
  firebase: Ember.inject.service(),

  isInvalidLogin: false,

  // authenticate against the firebase service
  login(userInfo) {
    let {email, password} = userInfo;
    this.get('session').open('firebase', {
      provider: 'password',
      email,
      password
    }).
      then((success) => {
        this.transitionToRoute('packages');
      }, (err) => {
        this.toggleProperty('isInvalidLogin');
      });
  },

  // sign up as a new user with the Firebase service. This not only registers a user, but also
  // creates a new User record in the firebase collection so that we can have persistent user info
  signUp(userInfo) {
    let {firstName, lastName, email, password} = userInfo;

    this.get('firebase').createUser({
      email,
      password
    }, (err, userData) => {
      if (err) {
        alert(err);
      } else {
        this.get('session').open('firebase', {
          provider: 'password',
          email,
          password
        })
          .then(() => {
            let user = this.store.createRecord('user', {
              id: userData.uid,
              firstName,
              lastName,
              email
            });
            user.save().then(() => this.transitionToRoute('packages'));
          });
      }
    });
  },


  actions: {
    // dispatch the login or signUp method based on the (boolean) value of `isLogin`, which is sent
    // from the `auth-form` component
    loginOrSignUp(isLogin, userInfo) {
      if (isLogin) {
        this.login(userInfo);
      } else {
        this.signUp(userInfo);
      }
    }
  }
});
