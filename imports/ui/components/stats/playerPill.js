import { Template } from 'meteor/templating';

import './playerPill.jade';

Template.playerPill.helpers({
	buttonClass() {
		if (this.teamId === 'yourClub') {
			return 'btn-info';
		} else if (this.teamId === 'opponent') {
			return 'btn-warning';
		}
	}
});

Template.playerPill.events({
	'click button': function(event) {
		//console.log(this);
	}
});
