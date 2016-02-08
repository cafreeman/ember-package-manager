import Ember from 'ember';
import transformDependency from '../utils/transform-dependency';

const { $ } = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service(),

  packagesToAdd: [],

  add(pkg) {
    this.get('packagesToAdd').addObject(pkg);
  },

  remove(pkg) {
    this.get('packagesToAdd').removeObject(pkg);
  },

  // check should implement validation logic when manipulating the package store, for example:
    // - checking to see if the package is already installed (DONE)
    // - verifying that the package exists in the cran API
  check(pkg) {
    // this will check the firebase store to see if a package of the same name already exists
    // returns a boolean
    return this.get('store').query('package', { orderBy: 'name', equalTo: pkg})
      .then((matches) => {
        return matches.get('length') > 0;
      });
  },

  // clear out the packages store. this should help with handling pushes to the server since we'll
  // want to empty the store on a successful push
  empty() {
    this.get('packagesToAdd').clear();
  },

  // issues a GET request to the cranDB API for a specific package and uses the JSON result to
  // create a new instance of the Package model with store.createRecord.
  // (currently) returns the record to the calling controller
  // TO DO: Handle failed requests gracefully
  // TO DO: Remove the package from the cart service on successful model.save()
  getPkgInfo(pkg) {
    let cranURL = `https://crandb.r-pkg.org/${pkg}`;
    return $.getJSON(cranURL)
      .then((result) => {
        let newRecord = this.get('store').createRecord('package', {
          name: result.Package,
          version: result.Version,
          title: result.Title,
          description: result.Description,
          publicationDate: new Date(result['Date/Publication'].split('-')),
          depends: transformDependency(result.Depends),
          imports: transformDependency(result.Imports),
          lastUpdated: new Date()
        });
        return newRecord;
      });
  },

  // push the packages in the store to the backend and persist them. not sure yet how much of this
  // process we should handle in the service, but the basic process should be as follows:
    // 1. Take a package name and query cran-DB to get all the package info
    // 2. Parse the package info to get all the required fields
    // 3. Use the parsed object to create a new instance of the Package model
    // 4. Push the new instance into Firebase using the Model.save() method
    // 5. Handle success/error
  pushToServer() {
    let packages = this.get('packagesToAdd');
    packages.forEach(pkg => {
      // get CRAN info and return a new instance of Package
      this.getPkgInfo(pkg)
        // Persist to Firebase
        .then(record => record.save()
          .then(
            // If successful, remove the package from the cart service
            () => this.remove(pkg),
            // Else, log the error (for now)
            (err) => {
              console.log(err);
            }
          )
        );
    });
  }
});
