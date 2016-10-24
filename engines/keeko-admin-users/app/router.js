import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('edit', { path: 'edit/:userId'}, function() {
    this.route('change-password');
    this.route('permissions');
    this.route('groups');
  });
  this.route('permission-denied');
  this.route('new');
});

export default Router;
