import { Template } from 'meteor/templating';
import R from 'ramda';
import 'meteor/sacha:spin';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';
import '../teamsAndScore/teamsAndScore.js';

Template.stats.helpers({
	dataForTeamsAndScore() {
		return R.pick(['yourClub', 'opponent', 'yourClubTeamId', 'opponentTeamId'], R.path(['data', 'gameData'], Template.instance()));
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