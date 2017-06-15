import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import R from 'ramda';
import 'meteor/sacha:spin';
import { getTeamScore } from '../utils.js';

import { Teams } from '../../../api/teams/schema.js';

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
		if (R.equals(this.gameState, 'gameEnded')) {
			return 'hidden';
		}
	},
	yourClubScore() {
		return getTeamScore(R.path(['gameData', 'yourClubTeamId'], this));
	},
	opponentScore() {
		return getTeamScore(R.path(['gameData', 'opponentTeamId'], this));
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
	'click .displayReplacement': () => {
		$('#tabsForAGame a[href="#replacement"]').tab('show');
	},
	'click .doReplacement': () => {
		$('#tabsForAGame a[href="#replacement"]').tab('show');
	}
});
