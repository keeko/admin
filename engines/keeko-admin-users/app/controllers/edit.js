import Ember from 'ember';

export default Ember.Controller.extend({
	i18n: Ember.inject.service(),
	application: Ember.inject.controller(),

	nav: Ember.computed('application.currentPath', function () {
		return [
			{
				title: this.get('i18n').t('profile'),
				route: 'edit.index',
				active: this.get('currentPath') === 'edit'
			},
			{
				title: this.get('i18n').t('change-password'),
				route: 'edit.change-password',
				active: this.get('currentPath') === 'edit/change-password'
			},
			{
				title: this.get('i18n').t('groups'),
				route: 'edit.groups',
				active: this.get('currentPath') === 'edit/groups'
			},
			{
				title: this.get('i18n').t('permissions'),
				route: 'edit.permissions',
				active: this.get('currentPath') === 'edit/permissions'
			}
		];
	})
});
