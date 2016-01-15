import Ember from 'ember';

export default Ember.Component.extend({
  isMenuToggled: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuToggled');
    },
    removePackage(pkg) {
      this.get('cart').remove(pkg);
    },
  }
});
