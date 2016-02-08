import DS from 'ember-data';
import MF from 'model-fragments';

export default DS.Model.extend({
  name: DS.attr('string'),
  version: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  publicationDate: DS.attr('date'),
  depends: MF.fragmentArray('dependency'),
  imports: MF.fragmentArray('dependency'),
  lastUpdated: DS.attr('date')
});
