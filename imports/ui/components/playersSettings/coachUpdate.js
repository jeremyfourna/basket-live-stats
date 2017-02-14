import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';

import './coachUpdate.jade';

Template.coachUpdate.events({
	'click .coachValidation': function(event) {
		event.preventDefault();
		const coachInfo = {
			lastName: event.target.parentElement[0].value,
			firstName: event.target.parentElement[1].value,
			coachId: this._id
		};
		Meteor.call('coachUpdate', coachInfo, (error) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	}
});
