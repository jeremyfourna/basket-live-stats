import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';

import './aGame.jade';
import '../../components/summary/summary.js';
import '../../components/stats/stats.js';
import '../../components/replacement/replacement.js';
import '../../components/playersSettings/playerBio.js';

Template.aGame.onCreated(function() {
	this.autorun(() => {
		const gameId = Router.current().params._id;
		this.subscribe('aGame', gameId);
		this.subscribe('playersForAGame', gameId);
	});
});

Template.aGame.helpers({
	isOwnerOfTheGame() {
		const gameId = Router.current().params._id;
		let game = Games.findOne({
			_id: gameId
		}, {
			fields: {
				userId: 1
			}
		});
		if (Meteor.userId() === game.userId) {
			return true;
		} else {
			return false;
		}
	},
	gameData() {
		const gameId = Router.current().params._id;
		return Games.findOne({
			_id: gameId
		}, {
			fields: {
				gameState: 1,
				gameInfos: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1,
				'stats.evolution': 1
			}
		});
	},
	homePlayers() {
		const gameId = Router.current().params._id;
		return Players.find({
			gameId,
			teamId: 'yourClub'
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	awayPlayers() {
		const gameId = Router.current().params._id;
		return Players.find({
			gameId,
			teamId: 'opponent'
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	homePlayersInGame() {
		const gameId = Router.current().params._id;
		return Players.find({
			gameId,
			teamId: 'yourClub',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	awayPlayersInGame() {
		const gameId = Router.current().params._id;
		return Players.find({
			gameId,
			teamId: 'opponent',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	}
});
