import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Games } from '../../../api/games/schema.js';

import './liveGames.jade';
import '../../components/creationGame/creationGame.js';
import '../../components/gameCard/gameCard.js';

Template.liveGames.onCreated(function() {
	this.autorun(() => {
		this.subscribe('liveGames');
		this.subscribe('myGames', Meteor.userId());
	});
});

Template.liveGames.helpers({
	liveGame() {
		return Games.find({
			privateGame: false,
			gameState: {
				$nin: ['notStarted', 'gameEnded']
			}
		}, {
			fields: {
				gameInfos: 1,
				gameState: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	},
	endedGame() {
		return Games.find({
			gameState: 'gameEnded',
			privateGame: false
		}, {
			fields: {
				gameInfos: 1,
				gameState: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	},
	ownerOfTheGame() {
		if (Meteor.userId() === this.userId) {
			return true;
		} else {
			return false;
		}
	},
	myGame() {
		return Games.find({
			userId: Meteor.userId(),
			gameState: {
				$nin: ['gameEnded']
			}
		}, {
			fields: {
				gameInfos: 1,
				gameState: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1
			}
		});
	}
});
