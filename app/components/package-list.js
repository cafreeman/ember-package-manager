import Ember from 'ember';

export default Ember.Component.extend({
  filteredPkgs: Ember.computed('packages.[]', 'query', function() {
    return this.get('packages').filter((pkg) => {
      return pkg.get('name').match(this.get('query'));
    });
  }),
  keyPress(event) {
    // trigger the onEnter action when the user hits enter in the search box
    if (event.keyCode === 13) {
      // get the first element in the package list
      let first = this.get('filteredPkgs')[0];
      // call the closure action passed into onEnter in the parent template
      this.get('onEnter')(first.id);
    }
  }
});
