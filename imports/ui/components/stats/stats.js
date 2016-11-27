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

Template.stats.onCreated(function() {
	this.autorun(() => {
		const gameId = this.data.gameData._id;

		this.subscribe('teamsForAGame', gameId);
		this.subscribe('playersForAGame', gameId);
	});
});

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

		return Teams.findOne({
			_id: teamId,
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	opponentScore() {
		const teamId = this.gameData.opponentTeamId;

		return Teams.findOne({
			_id: teamId,
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	yourClubPlayersInGame() {
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;

		return Players.find({
			gameId,
			teamId,
			inPlay: true
		}, {
			fields: {
				_id: 1,
				firstName: 1,
				lastName: 1,
				jersey: 1
			},
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	opponentPlayersInGame() {
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;

		return Players.find({
			gameId,
			teamId,
			inPlay: true
		}, {
			fields: {
				_id: 1,
				firstName: 1,
				lastName: 1,
				jersey: 1
			},
			sort: {
				jersey: 1
			}
		}).fetch();
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
