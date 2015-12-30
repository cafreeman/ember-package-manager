import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // return this.store.findRecord('package', params.id);
    let pkgDetailURL = `http://crandb.r-pkg.org/${params.pkgName}`;
    return $.getJSON(pkgDetailURL);
  }
});
