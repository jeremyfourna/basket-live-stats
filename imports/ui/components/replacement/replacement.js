import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { TAPi18n } from 'meteor/tap:i18n';

import './replacement.jade';
import './replacementModal.js';

Template.replacement.helpers({
	yourClub() {
		return this.gameData.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.opponent || TAPi18n.__('awayTeam');
	},
	playersInPlay() {
		return this.filter((cur) => {
			return cur.inPlay === true;
		});
	},
	playersOnTheBench() {
		return this.filter((cur) => {
			return cur.inPlay === false;
		});
	},
	yourClubPlayers() {
		const teamId = this.gameData.yourClubTeamId;

		return this.playersData.filter((cur) => {
			return cur.teamId === teamId;
		});
	},
	opponentPlayers() {
		const teamId = this.gameData.opponentTeamId;

		return this.playersData.filter((cur) => {
			return cur.teamId === teamId;
		});
	}
});

Template.replacement.events({
	'click button': function() {
		return Session.set({
			playerId: this._id,
			inPlay: this.inPlay,
			gameState: Template.currentData().gameData.gameState
		});
	}
});