import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('groups');
  this.route('people');
  this.route('settings', function() {
    this.route('notifications');
  });
  this.route('loading');
});
