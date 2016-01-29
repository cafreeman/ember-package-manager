import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('package-cart'),

  beforeModel() {
    if (!this.get('session.isAuthenticated')) {
      this.transitionTo('login');
    }
  },

  model() {
    return this.get('cart.packagesToAdd');
  },
  actions: {
    empty() {
      this.get('cart').empty();
    },
    submitAll() {
      this.get('cart').pushToServer();
    }
  }
});
