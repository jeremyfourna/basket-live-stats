import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Teams } from '../../../api/teams/schema.js';
import { Players } from '../../../api/players/schema.js';

import './aGame.jade';
import '../../components/summary/summary.js';
import '../../components/stats/stats.js';
import '../../components/replacement/replacement.js';
import '../../components/playersSettings/playerBio.js';

Template.aGame.onCreated(function() {
	this.autorun(() => {
		const gameId = Router.current().params._id;

		this.subscribe('Games.aGame', gameId);
		this.subscribe('Teams.teamsForAGame', gameId);
		this.subscribe('Players.playersForAGame', gameId);
	});
});

Template.aGame.helpers({
	isOwnerOfTheGame() {
		const gameId = Router.current().params._id;
		let userId = Meteor.userId();

		let game = Games.findOne({ _id: gameId }, {
			fields: {
				userId: 1
			}
		});

		if (userId === game.userId) {
			return true;
		} else {
			return false;
		}
	},
	gameData() {
		const gameId = Router.current().params._id;

		return Games.findOne({ _id: gameId }, {
			fields: {
				_id: 1,
				gameState: 1,
				yourClub: 1,
				yourClubTeamId: 1,
				opponent: 1,
				opponentTeamId: 1,
				evolution: 1
			}
		});
	},
	playersDataInGame() {
		const gameId = Router.current().params._id;

		return Players.find({
			gameId,
			inPlay: true
		}, {
			fields: {
				_id: 1,
				teamId: 1,
				firstName: 1,
				lastName: 1,
				jersey: 1
			},
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	teamsScore() {
		const gameId = Router.current().params._id;

		return Teams.find({ gameId }, {
			fields: {
				_id: 1,
				score: 1
			}
		}).fetch();
	},
	playersData() {
		const gameId = Router.current().params._id;

		return Players.find({ gameId }, {
			fields: {
				_id: 1,
				teamId: 1,
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
});
