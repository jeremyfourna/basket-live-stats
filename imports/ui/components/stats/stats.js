import { Template } from 'meteor/templating';
import R from 'ramda';
import 'meteor/sacha:spin';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';
import '../teamsAndScore/teamsAndScore.js';
import '../playersInGame/playersInGame.js';

function getDataForPlayersInGame(team, teamId, isHomeTeam, templateInstance) {
	const clubProps = R.pick([team, teamId], R.path(['data', 'gameData'], templateInstance));
	const homeTeam = R.assoc('isHomeTeam', isHomeTeam, clubProps);
	const clubPlayers = R.filter((cur) => {
		return cur.teamId === R.prop(teamId, clubProps);
	}, R.path(['data', 'playersDataInGame'], templateInstance));
	return R.assoc('playersInGame', clubPlayers, homeTeam);
}

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
	dataForPlayersInGameYourClub() {
		return getDataForPlayersInGame('yourClub', 'yourClubTeamId', true, Template.instance());
	},
	dataForPlayersInGameOpponent() {
		return getDataForPlayersInGame('opponent', 'opponentTeamId', false, Template.instance());
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