import Ember from 'ember';

export default Ember.Controller.extend({
	store: Ember.inject.service(),
	filter: null,

	columns: [
		{
			"propertyName": "displayName",
			"title": "Name",
			"filteredBy": "filter[fields][display-name]",
			"sortedBy": "display-name",
			"routeName": "edit",
		},
		{
			"propertyName": "email",
			"title": "Email",
			"filteredBy": "filter[fields][email]",
			"sortedBy": "email"
		}
	],

	groups: Ember.computed(function () {
		return this.get('store').findAll('core/group');
	}),

	actions: {
		filter(group) {
			const model = this.get('model');
			const modelName = Ember.get(model, 'type.modelName');
			let query = Ember.$.extend({}, Ember.get(model, 'query'));

			if (this.get('filter') === group) {
				this.set('filter', null);
				delete query['filter[fields][user_group.group_id]'];
			} else {
				this.set('filter', group);
				query['filter[fields][user_group.group_id]'] = group.get('id');
			}

			this.get('store').query(modelName, query).then((newData) => {
				this.set('model', newData);
			});
		}
	}
});
