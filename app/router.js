import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('packages', function() {
    this.route('pkg-info', {
      path: ':id'
    });
  });
  this.route('add-package');
  this.route('package-search');
});

export default Router;
