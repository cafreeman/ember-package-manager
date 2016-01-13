import Ember from 'ember';

export default Ember.Component.extend({
  isMenuToggled: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuToggled');
    },
  }
});
