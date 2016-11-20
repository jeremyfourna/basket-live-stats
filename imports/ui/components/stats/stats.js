import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { TAPi18n } from 'meteor/tap:i18n';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './modal/playerModal.js';
import './modal/opponentPlayerModal.js';

Template.stats.helpers({
	yourClub() {
		return this.gameData.gameInfos.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.gameInfos.opponent || TAPi18n.__('awayTeam');
	},
	doReplacementYourClub() {
		var team = Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: true
		}).fetch();
		if (team.length > 0) {
			return 'doReplacementPlayer';
		} else {
			return 'hidden';
		}
	},
	doReplacementOpponent() {
		var team = Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: true
		}).fetch();
		if (team.length > 0) {
			return 'doReplacementPlayer';
		} else {
			return 'hidden';
		}
	},
	gameEndedOrNot() {
		if (this.gameState === 'gameEnded') {
			return 'hidden';
		}
	},
	buttonClass() {
		if (this.teamId === 'yourClub') {
			return 'btn-info';
		} else if (this.teamId === 'opponent') {
			return 'btn-warning';
		}
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
