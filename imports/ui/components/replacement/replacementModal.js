import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Bert } from 'meteor/themeteorchef:bert';

import './replacementModal.jade';

Template.replacementModal.events({
	'click #validateSwitch': (event) => {
		event.preventDefault();
		const data = {
			playerId: Session.get('playerId'),
			gameState: Session.get('gameState'),
			minutes: Number($('#minutes').val()),
			secondes: Number($('#secondes').val())
		};
		if (Session.get('inPlay')) {
			Meteor.call('Players.goingOnTheBench', data, (error, result) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		} else {
			Meteor.call('Players.goingInPlay', data, (error, result) => {
				if (error) {
					return Bert.alert(error.message, 'danger', 'growl-top-right');
				}
			});
		}
	},
	'click #cancelSwitch': (event) => {
		event.preventDefault();
		$('#replacementModal').modal('hide');
	}
});
