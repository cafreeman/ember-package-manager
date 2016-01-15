import Ember from 'ember';

export default Ember.Component.extend({
  cart: Ember.inject.service('package-cart'),

  isMenuToggled: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuToggled');
    },
    removePackage(pkg) {
      this.get('cart').remove(pkg);
    },
    checkPackage(pkg) {
      this.get('cart').check(pkg);
    }
  }
});
