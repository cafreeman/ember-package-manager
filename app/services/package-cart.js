import Ember from 'ember';

export default Ember.Service.extend({
  packagesToAdd: [],

  add(pkg) {
    this.get('packagesToAdd').pushObject(pkg);
  },

  remove(pkg) {
    this.get('packagesToAdd').removeObject(pkg);
  },

  // check should implement validation logic when manipulating the package store, for example:
    // - checking to see if the package is already installed
    // - verifying that the package exists in the cran API
  check(pkg) {
    console.log(`checking ${pkg}`);
  },

  // clear out the packages store. this should help with handling pushes to the server since we'll
  // want to empty the store on a successful push
  empty() {

  },

  // push the packages in the store to the backend and persist them. not sure yet how much of this
  // process we should handle in the service, but the basic process should be as follows:
    // 1. Take a package name and query cran-DB to get all the package info
    // 2. Parse the package info to get all the required fields
    // 3. Use the parsed object to create a new instance of the Package model
    // 4. Push the new instance into Firebase using the Model.save() method
    // 5. Handle success/error
  pushToServer() {

  }
});
