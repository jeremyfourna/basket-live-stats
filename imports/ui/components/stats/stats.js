import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';

import './stats.jade';
import '../stateOfTheGame/stateOfTheGame.js';
import './playerPill.js';
import './modal/playerModal.js';

Template.stats.onCreated(function() {
	this.autorun(() => {
		this.subscribe('oneGameForStats', Router.current().params._id);
	});
});

Template.stats.helpers({
	yourClub() {
		if (this.gameInfos.yourClub) {
			return this.gameInfos.yourClub;
		} else {
			return 'Home team';
		}
	},
	opponent() {
		if (this.gameInfos.opponent) {
			return this.gameInfos.opponent;
		} else {
			return 'Away team';
		}
	},
	gameData() {
		return Games.findOne({ _id: Router.current().params._id }, {
			fields: {
				gameState: 1,
				gameInfos: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	},
	yourClubPlayersPlaying() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	opponentPlayersPlaying() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
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
