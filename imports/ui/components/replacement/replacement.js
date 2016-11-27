import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Players } from '../../../api/players/schema.js';

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
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;

		return Players.find({
			gameId,
			teamId,
		}, {
			fields: {
				_id: 1,
				firstName: 1,
				lastName: 1,
				jersey: 1,
				inPlay: 1
			},
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	opponentPlayers() {
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;

		return Players.find({
			gameId,
			teamId,
		}, {
			fields: {
				_id: 1,
				firstName: 1,
				lastName: 1,
				jersey: 1,
				inPlay: 1
			},
			sort: {
				jersey: 1
			}
		}).fetch();
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
