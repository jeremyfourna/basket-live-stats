import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import './replacement.jade';
import './replacementModal.js';

Template.replacement.helpers({
	yourClub() {
		return this.gameData.gameInfos.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.gameInfos.opponent || TAPi18n.__('awayTeam');
	},
	yourClubPlayersPlaying() {
		return this.homePlayers.filter((cur) => {
			return cur.inPlay === true;
		});
	},
	yourClubPlayersOnTheBench() {
		return this.homePlayers.filter((cur) => {
			return cur.inPlay === false;
		});
	},
	opponentPlayersPlaying() {
		return this.awayPlayers.filter((cur) => {
			return cur.inPlay === true;
		});
	},
	opponentPlayersOnTheBench() {
		return this.awayPlayers.filter((cur) => {
			return cur.inPlay === false;
		});
	}
});

Template.replacement.events({
	'click button': function(event) {
		return Session.set({
			playerId: this._id,
			inPlay: this.inPlay,
			gameState: Template.currentData().gameData.gameState
		});
	}
});
