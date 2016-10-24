import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),

	init: function() {
		this._super(...arguments);

		const session = this.get('session');
		session.addObserver('permissions', () => {
			if (session.hasPermission('keeko/core', 'user-paginate')) {
				// this.transitionTo('index');
			}
		});
	}
});
