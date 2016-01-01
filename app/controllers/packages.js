import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showPkgInfo(pkgId) {
      this.transitionToRoute('packages.pkg-info', pkgId);
    }
  }
});
