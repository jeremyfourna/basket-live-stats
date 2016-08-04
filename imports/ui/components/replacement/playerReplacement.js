import { Template } from 'meteor/templating';

import './playerReplacement.jade';

Template.playerReplacement.onRendered(function() {
	console.log(this.data);
})

Template.playerReplacement.helpers({
	endedGames() {
		if (this.gameState === 'gameEnded') {
			return 'disabled';
		} else {
			return false;
		}
	}
});
