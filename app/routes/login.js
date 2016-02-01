import Ember from 'ember';

export default Ember.Route.extend({
  // redirect to the main page if the user is already logged in
  beforeModel() {
    if (this.get('session.isAuthenticated')) {
      this.transitionTo('packages');
    }
  }
});
