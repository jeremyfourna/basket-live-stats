import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './playerReplacement.jade';

Template.playerReplacement.helpers({
	buttonClass() {
		if (this.teamId === 'yourClub') {
			return 'btn-info';
		} else if (this.teamId === 'opponent') {
			return 'btn-warning';
		}
	}
});

Template.playerReplacement.events({
	'click button': function(event) {
		return Session.set({
			playerId: this._id,
			inPlay: this.inPlay,
			gameState: Template.parentData(1).gameState
		});
	}
});
