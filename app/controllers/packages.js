import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showPkgInfo(pkgId) {
      this.transitionToRoute('packages.pkg-info', pkgId);
    },
    removePackage(pkgId) {
      console.log(`deleting package with id: ${pkgId}`);
      this.store.findRecord('package', pkgId)
        .then(pkg => {
          pkg.deleteRecord();
        });
    },
    undoRemove(pkgId) {
      console.log('Undoing remove');
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
