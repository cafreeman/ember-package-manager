import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    submitPackage() {
      let newPackage = this.store.createRecord('package', {
        name: this.controller.get('name'),
        version: this.controller.get('version'),
        title: this.controller.get('title'),
        description: this.controller.get('description'),
        publicationDate: new Date(this.controller.get('publicationDate').split('-')),
        lastUpdated: new Date()
      });
      newPackage.save().then(() => {
        this.controller.setProperties({
          name: '',
          version: '',
          title: '',
          description: '',
          publicationDate: '',
          lastUpdated: ''
        });
        this.transitionTo('packages');
      });
    }
  }
});
