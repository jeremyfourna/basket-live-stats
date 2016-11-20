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
	gameState() {
		return this.gameData.gameState;
	},
	gameId() {
		const gameId = Router.current().params._id;
		return gameId;
	},
	gameEndedOrNot() {
		if (this.gameState === 'gameEnded') {
			return 'hidden';
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
