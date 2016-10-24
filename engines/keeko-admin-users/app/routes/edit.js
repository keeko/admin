import Ember from 'ember';
import RollbackRoute from 'ember-keeko/mixins/rollback-route';

export default Ember.Route.extend(RollbackRoute, {
	model(params) {
	    return this.get('store').findRecord('core/user', params.userId, {
			include: 'groups'
		});
	}
});
