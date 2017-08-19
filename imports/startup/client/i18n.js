import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';
import R from 'ramda';

function getUserLanguage() {
	// Put here the logic for determining the user language
	if (R.isNil(R.path(['profile', 'preferredLanguage'], Meteor.user()))) {
		return 'en';
	} else {
		return R.path(['profile', 'preferredLanguage'], Meteor.user());
	}
}

if (Meteor.isClient) {
	Meteor.startup(() => {
		TAPi18n.setLanguage(getUserLanguage()).fail((errorMessage) => {
			return Bert.alert(errorMessage, 'danger', 'growl-top-right');
		});
	});
}