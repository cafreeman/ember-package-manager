import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let pkgDetailURL = `http://crandb.r-pkg.org/${params.pkgName}`;
    // return params.pkgName;
    return $.getJSON(pkgDetailURL);
  }
});
