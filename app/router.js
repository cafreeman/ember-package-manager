import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('packages', function() {
    this.route('pkg-info', { path: ':id' });
  });
  this.route('package-search');
  this.route('login');
  this.route('create-release');
  this.route('releases');
});

export default Router;
