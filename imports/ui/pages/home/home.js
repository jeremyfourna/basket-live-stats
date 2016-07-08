import { Template } from 'meteor/templating';

import { Games } from '../../../api/games/schema.js';

import './home.jade';

Template.home.onCreated(function() {
	this.autorun(() => {
		this.subscribe('last3LiveGames');
		this.subscribe('last3EndedGames');
	});
});

Template.home.helpers({
	game() {
		return Games.find({ gameState: { $nin: ['gameEnded', 'notStarted'] }, privateGame: false }, {
			fields: {
				gameInfos: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1,
				gameState: 1
			},
			limit: 3
		});
	},
	endedGame() {
		return Games.find({ gameState: 'gameEnded', privateGame: false }, {
			fields: {
				gameInfos: 1,
				'stats.yourClub.score': 1,
				'stats.opponent.score': 1,
				gameState: 1
			},
			limit: 3
		});
	}
});
