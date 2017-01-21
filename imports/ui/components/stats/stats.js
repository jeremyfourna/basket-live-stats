import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { TAPi18n } from 'meteor/tap:i18n';
import 'meteor/sacha:spin';

import { Teams } from '../../../api/teams/schema.js';
import { Players } from '../../../api/players/schema.js';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';

Template.stats.helpers({
	yourClub() {
		return this.gameData.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.opponent || TAPi18n.__('awayTeam');
	},
	gameState() {
		return this.gameData.gameState;
	},
	gameId() {
		return this.gameData._id;
	},
	gameEndedOrNot() {
		if (this.gameState === 'gameEnded') {
			return 'hidden';
		}
	},
	yourClubScore() {
		const teamId = this.gameData.yourClubTeamId;

		return Teams.findOne({ _id: teamId }, {
			fields: {
				score: 1
			}
		}).score;
	},
	opponentScore() {
		const teamId = this.gameData.opponentTeamId;

		return Teams.findOne({ _id: teamId }, {
			fields: {
				score: 1
			}
		}).score;
	},
	yourClubPlayersInGame() {
		const teamId = this.gameData.yourClubTeamId;

		return this.playersDataInGame.filter((cur) => {
			return cur.teamId === teamId;
		});
	},
	opponentPlayersInGame() {
		const teamId = this.gameData.opponentTeamId;

		return this.playersDataInGame.filter((cur) => {
			return cur.teamId === teamId;
		});
	}
});

Template.stats.events({
	'click .displayReplacement': function(event) {
		$('#tabsForAGame a[href="#replacement"]').tab('show');
	},
	'click .doReplacement': function(event) {
		$('#tabsForAGame a[href="#replacement"]').tab('show');
	}
});
