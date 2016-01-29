import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    // Retrieve the current user's session (if it exists)
    return this.get('session').fetch().catch(error => console.log(error));
  },
  actions: {
    logOut() {
      this.get('session').close().then(() => {
        this.transitionTo('application');
      });
    }
  }
});
