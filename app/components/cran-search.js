import Ember from 'ember';

export default Ember.Component.extend({
  // packages: ['dplyr', 'magrittr'],
  // packages() {
  //   let packageListURL = 'http://crandb.r-pkg.org/-/desc?limit=10';
  //   return $.getJSON(packageListURL)
  //     .then((packages) => {
  //       return Object.keys(packages);
  //     });
  // },
  // packageList: Ember.computed('packageList.[]', function() {
  //   return this.get('packageList')
  // })
  currentPkg: '',

  actions: {
    searchCRAN() {
      let packageListURL = 'http://crandb.r-pkg.org/-/desc?limit=500';
      return $.getJSON(packageListURL)
        .then((packages) => {
          return Object.keys(packages);
        });
    },
    update(selected) {
      this.set('currentPkg', selected);
    }
  }
});
