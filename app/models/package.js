import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  publicationDate: DS.attr('date'),
  // depends: DS.attr(),
  // imports: DS.attr(),
  lastUpdated: DS.attr('date')
});
