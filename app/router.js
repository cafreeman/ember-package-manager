import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('package-list', function() {
    this.route('pkg-info', {
      path: ':pkgName'
    });
  });
  this.route('packages', function() {
    this.route('pkg-info', {
      path: ':pkgName'
    });
  });
});

export default Router;
