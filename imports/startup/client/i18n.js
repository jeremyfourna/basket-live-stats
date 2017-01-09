import { Meteor } from 'meteor/meteor';
import { TAPi18n } from 'meteor/tap:i18n';
import { Bert } from 'meteor/themeteorchef:bert';

let getUserLanguage = () => {
	// Put here the logic for determining the user language
	return 'fr';
};

if (Meteor.isClient) {
	Meteor.startup(() => {
		TAPi18n.setLanguage(getUserLanguage()).fail((error_message) => {
			return Bert.alert(error_message, 'danger', 'growl-top-right');
		});
	});
}
