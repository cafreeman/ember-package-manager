import Ember from 'ember';

export default Ember.Component.extend({
  filteredPkgs: Ember.computed('packages.[]', 'query', function() {
    return this.get('packages').filter((pkg) => {
      return pkg.get('name').match(this.get('query'));
    });
  }),
  keyPress: function(event) {
    // if event.charCode == charCode for 'Enter' then get the first element from filtered packages and transition to that ID
    debugger;
  }
});
