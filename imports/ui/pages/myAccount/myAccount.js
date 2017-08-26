import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
import { TAPi18n } from 'meteor/tap:i18n';
import 'meteor/sacha:spin';

import './myAccount.jade';

Template.myAccount.helpers({
	userData() {
		return Meteor.user();
	},
	address() {
		return this.emails[0].address;
	}
});

Template.myAccount.events({
	'click #personalInfosValidate': (event) => {
		event.preventDefault();

		const user = {
			userId: Meteor.userId(),
			lastName: $('#lastName').val(),
			firstName: $('#firstName').val()
		};

		return Meteor.call('Users.updateUserProfile', user, (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			} else {
				return Bert.alert(TAPi18n.__('updateDone'), 'success', 'growl-top-right');
			}
		});
	}
});