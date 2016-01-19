import Ember from 'ember';

export default Ember.Route.extend({
  cart: Ember.inject.service('package-cart'),

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
