import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import R from 'ramda';
import 'meteor/sacha:spin';
import { getTeamScore } from '../utils.js';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';

Template.stats.helpers({
	yourClub() {
		return R.path(['data', 'gameData', 'yourClub'], Template.instance()) || TAPi18n.__('homeTeam');
	},
	opponent() {
		return R.path(['data', 'gameData', 'opponent'], Template.instance()) || TAPi18n.__('awayTeam');
	},
	gameState() {
		return R.path(['data', 'gameData', 'gameState'], Template.instance());
	},
	gameId() {
		return R.path(['data', 'gameData', '_id'], Template.instance());
	},
	gameEndedOrNot() {
		if (R.equals(R.path(['data', 'gameData', 'gameState'], Template.instance()), 'gameEnded')) {
			return 'hidden';
		}
	},
	yourClubScore() {
		return getTeamScore(R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance()));
	},
	opponentScore() {
		return getTeamScore(R.path(['data', 'gameData', 'opponentTeamId'], Template.instance()));
	},
	yourClubPlayersInGame() {
		const teamId = R.path(['data', 'gameData', 'yourClubTeamId'], Template.instance());

		return R.filter((cur) => {
			return cur.teamId === teamId;
		}, R.path(['data', 'playersDataInGame'], Template.instance()));
	},
	opponentPlayersInGame() {
		const teamId = R.path(['data', 'gameData', 'opponentTeamId'], Template.instance());

		return R.filter((cur) => {
			return cur.teamId === teamId;
		}, R.path(['data', 'playersDataInGame'], Template.instance()));
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