import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createRelease(info) {
      info.contents = this.get('model');
      this.store.createRecord('release', info)
        .save()
        .then(() => {
          this.transitionToRoute('releases');
        }, (err) => {
          console.log(err);
        });
    }
  }
});
