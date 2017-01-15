import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
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
	'click #emailValidate': (event) => {
		event.preventDefault();

		function validateEmail(mail) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
				return mail;
			} else {
				return false;
			}
		};

		const data = {
			userId: Meteor.userId(),
			email: validateEmail($('#email').val())
		};

		if (data.email) {
			return Meteor.call('updateEmail', data, (error) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				} else {
					Meteor.logout();
					return Router.go('home');
				}
			});
		} else {
			return Bert.alert('Please enter a valid email address', 'danger', 'growl-top-right');
		}
	},
	'click #deleteAccount': (event) => {
		event.preventDefault();
		return Meteor.call('deleteUser', Meteor.userId(), (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			} else {
				Meteor.logout();
				return Router.go('home');
			}
		});
	},
	'click #personalInfosValidate': (event) => {
		event.preventDefault();

		const user = {
			id: Meteor.userId(),
			name: $('#name').val(),
			firstName: $('#firstName').val()
		};
		return Meteor.call('updateUserProfile', user, (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #personalInfosClubValidate': (event) => {
		event.preventDefault();
		const user = {
			userId: Meteor.userId(),
			club: $('#club').val()
		};
		return Meteor.call('updateClub', user, (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	}
});
