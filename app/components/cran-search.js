import Ember from 'ember';

export default Ember.Component.extend({
  currentPkg: '',

  actions: {
    },
    update(selected) {
      this.set('currentPkg', selected);
    }
  }
});
