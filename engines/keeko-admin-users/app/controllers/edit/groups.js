import Ember from 'ember';

export default Ember.Controller.extend({
	index: Ember.inject.controller(),

	groups: Ember.computed(function () {
		return this.get('index').get('groups');
	}),

	actions: {
		changeGroup(group, e) {
			const user = this.get('model');
			if (e.target.checked) {
				user.get('groups').pushObject(group);
			} else {
				user.get('groups').removeObject(group);
			}
			user.save();
		}
	}
});
