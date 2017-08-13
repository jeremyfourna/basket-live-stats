import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';

function getUserLanguage() {
	// Put here the logic for determining the user language
	return 'fr';
}

if (Meteor.isClient) {
	Meteor.startup(() => {
		TAPi18n.setLanguage(getUserLanguage()).fail((errorMessage) => {
			return Bert.alert(errorMessage, 'danger', 'growl-top-right');
		});
	});
}