import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON('https://api.github.com/repos/AlteryxLabs/package-list/contents/package.json')
      .then((data) => {
        return $.getJSON(data.download_url);
      });
  }
});
