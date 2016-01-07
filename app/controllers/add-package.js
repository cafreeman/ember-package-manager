import Ember from 'ember';

export default Ember.Controller.extend({
  // findPkgInfo(pkgName) {
  //   let baseURL = 'http://crandb.r-pkg.org/';
  //   return new Ember.RSVP.Promise((resolve) => {
  //     $.getJSON(baseURL + pkgName)
  //       .then((data) => {
  //         // CHECK API RESPONSE FOR SUCCESS
  //         // PUT API RESPONSE INTO AN INSTANCE OF `PACKAGE` MODEL
  //       })
  //   })
  // },
  // actions: {
  //   addPackage() {
  //     console.log(this.get('name'));
  //     this.store.query('package', {
  //       orderBy: 'name',
  //       equalTo: this.get('name')
  //     })
  //       .then((data) => {
  //         if (data.get('length') > 0) {
  //           return data.get('firstObject');
  //         } else {
  //           console.log('no records found');
  //         }
  //       })
  //       .then((record) => {
  //         console.log(record.get('name'));
  //         console.log(record.get('description'));
  //       });
  //   }
  // }
});
