import Ember from 'ember';

export default Ember.Component.extend({
	systemPreferences: Ember.inject.service('system-preferences'),

	// {% if prefs.user_names != 'none' %}
	// let givenName = document.getElementById('given_name');
	// let familyName = document.getElementById('family_name');
	// let givenFamilyOpt = document.getElementById('display_opt_given_family');
	// let familyGivenOpt = document.getElementById('display_opt_family_given');
	//
	// updateNames = function() {
	// 	let given = givenName.value;
	// 	let family = familyName.value;
	// 	if (givenFamilyOpt) {
	// 		givenFamilyOpt.textContent = given + ' ' + family;
	// 	}
	// 	if (familyGivenOpt) {
	// 		familyGivenOpt.textContent = family + ' ' + given;
	// 	}
	// };
	//
	// if (givenName) {
	// 	givenName.addEventListener('keyup', updateNames);
	// }
	// if (familyName) {
	// 	familyName.addEventListener('keyup', updateNames);
	// }
	// {% endif %}
	// {% if prefs.display_option_nickname and prefs.nick_name %}
	// let nickName = document.getElementById('nick_name');
	// let nickNameOpt = document.getElementById('display_opt_nickname');
	// nickName.addEventListener('keyup', function() {
	// 	nickNameOpt.textContent = nickName.value;
	// });
	// {% endif %}

	actions: {
		save() {
			this.sendAction('save', this.get('user'));
		}
	}
});
