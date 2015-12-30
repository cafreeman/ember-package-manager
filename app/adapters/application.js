import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  findAll() {
    let baseURL = 'https://api.github.com/repos/AlteryxLabs/package-list/contents/jsonAPIPackage.json';
    return $.getJSON(baseURL)
      .then((data) => {
        return $.getJSON(data.download_url);
      });
  }
});
