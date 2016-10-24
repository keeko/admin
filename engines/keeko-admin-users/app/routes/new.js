import Ember from 'ember';
import RollbackRoute from 'ember-keeko/mixins/rollback-route';

export default Ember.Route.extend(RollbackRoute, {
	model() {
		return this.get('store').createRecord('core/user');
	},

	actions: {
		save(user) {
			user.save().then(() => {
				this.transitionTo('index');
			});
		}
	}
});
