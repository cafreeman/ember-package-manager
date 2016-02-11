import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  title: attr('string'),
  notes: attr('string'),
  rVersion: attr('string'),
  alteryxVersion: attr('string'),
  dateCreated: attr('date', {
    defaultValue() { return new Date(); }
  }),
  // contents: hasMany('installedPackage')
  contents: hasMany('package')
});
