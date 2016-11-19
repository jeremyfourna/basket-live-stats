import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';

import './playerUpdate.jade';

Template.playerUpdate.events({
	'click .playerValidation': function(event) {
		event.preventDefault();
		const playerInfo = {
			lastName: event.target.parentElement[0].value,
			firstName: event.target.parentElement[1].value,
			playerId: this._id
		};
		Meteor.call('playerUpdate', playerInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
