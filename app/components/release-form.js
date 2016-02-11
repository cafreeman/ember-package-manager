import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    onSubmit() {
      this.get('on-submit')(this.getProperties('title', 'notes', 'rVersion', 'alteryxVersion'));
    }
  }
});
