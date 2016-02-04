import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showPkgInfo(pkgId) {
      this.transitionToRoute('packages.pkg-info', pkgId);
    },
    removePackage(pkgId) {
      this.store.findRecord('package', pkgId)
        .then(pkg => {
          pkg.deleteRecord();
        });
    },
    undoRemove(pkgId) {
      this.store.findRecord('package', pkgId)
        .then(pkg => {
          pkg.rollbackAttributes();
        });
    },
    confirmRemove(pkgId) {
      this.store.findRecord('package', pkgId)
        .then(pkg => {
          pkg.save().then(() => this.transitionToRoute('packages'));
        });
    }
  }
});
