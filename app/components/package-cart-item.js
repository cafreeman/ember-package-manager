import Ember from 'ember';

export default Ember.Component.extend({
  isMenuToggled: false,

  _toggleMenu() {
    this.toggleProperty('isMenuToggled');
  },
  click() {
    this._toggleMenu();
  }
});
