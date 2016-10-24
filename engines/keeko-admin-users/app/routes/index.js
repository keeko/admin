import Ember from 'ember';
import { CanMixin } from 'ember-can';

export default Ember.Route.extend(CanMixin, {
	session: Ember.inject.service(),

	beforeModel() {
		if (!this.can('paginate core.user')) {
			// return this.transitionTo('permission-denied');
		}
	},

	model() {
		return this.get('store').query('core/user', {
			sort: '-created-at'
		});
	}
});
