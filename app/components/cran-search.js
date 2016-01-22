import Ember from 'ember';
const {$} = Ember;

export default Ember.Component.extend({
  cart: Ember.inject.service('package-cart'),

  // currentPkg is the `selected` property for `power-select`
  currentPkg: '',

  // _performCRANSearch is a component method that queries the cranDB elastic search client
  // This method is not meant to be called explicitly, but is instead targeted by the `searchCRAN`
  // action. This allows us to debounce the search action in `power-select` and (hopefully) not
  // overload the API.
  // @param query is what the user is typing into the search box
  _performCRANSearch(query, resolve, reject) {
    if (Ember.isBlank(query)) {
      return resolve([]);
    }
    // use the query string as a query param on the seer elasticSearch API.
    // NOTE: there is a `*` at the very end of the API's query param so that we get something that
    // looks like typeahead search by package name. There may be a better way to do this with
    // elasticSearch, but this seems to working fine so far.
    const url = `http://seer.r-pkg.org:9200/_search?q=_id:${query}*`;
    return $.getJSON(url)
      .then((json) => {
        // pull out the `hits` array of search matches and map over them to return a more compact
        // object for each result.
        let results = json.hits.hits;
        resolve(results.map((pkg) => {
          return {
            name: pkg._id,
            title: pkg._source.Title
          };
        }));
      }, (err) => {
        reject(err);
      });
  },
  actions: {
    // searchCRAN is the `search` action called from `power-select` and wraps the `debounce` method
    // in a RSVP.Promise so we can prevent an ajax request from being trigged on every keypress
    searchCRAN(query) {
        return new Ember.RSVP.Promise((resolve, reject) => {
          Ember.run.debounce(this, this._performCRANSearch, query, resolve, reject, 500);
        });
      },
      // update is the `onchange` action called from `power-select` and has two responsibilities:
      // 1. puts the selected search result in the top level of the search box
      // 2. adds the result to the `package-cart` service store, thereby instantiating an instance
      // of the `package-cart-item` component
      update(selected) {
        this.get('cart').check(selected.name)
          .then((result) => {
            if (result) {
              alert(`Warning: ${selected.name} is already installed!`);
            } else {
              this.set('currentPkg', selected);
              this.get('cart').add(selected.name);
            }
          });
      }
  }
});
