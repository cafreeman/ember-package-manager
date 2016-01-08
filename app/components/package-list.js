import Ember from 'ember';

export default Ember.Component.extend({
  filteredPkgs: Ember.computed('packages.[]', 'query', function() {
    return this.get('packages').filter((pkg) => {
      return pkg.get('name').match(this.get('query'));
    });
  }),
  showTopResult() {
    // get the first element in the package list
    let first = this.get('filteredPkgs')[0];
    // call the closure action passed into the search attribute in the parent template
    this.get('onSearch')(first.id);
  },
  keyPress(event) {
    // call the showTopResult method when the user hits enter in the search box
    if (event.keyCode === 13) {
      this.showTopResult();
    }
  },
  actions: {
    search() {
      this.showTopResult();
    },
    clearSearchBox() {
      this.set('query', '');
    }
  }
});
