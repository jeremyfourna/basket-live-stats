import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Games } from '../schema.js';

// Publication who send back everything, use it carrefully
Meteor.publish('games', () => {
	return Games.find({});
});

// Publication who send back the last 3 live games
Meteor.publish('last3LiveGames', () => {
	return Games.find({
		gameState: {
			$nin: ['gameEnded', 'notStarted']
		},
		privateGame: false
	}, {
		limit: 3,
		sort: {
			createdAt: -1
		}
	});
});

// Publication who send back the last 3 ended games
Meteor.publish('last3EndedGames', () => {
	return Games.find({
		gameState: 'gameEnded',
		privateGame: false
	}, {
		limit: 3,
		sort: {
			createdAt: -1
		}
	});
});

// Send back one game
Meteor.publish('oneGameForStats', (gameId) => {
	check(gameId, String);
	return Games.find({ _id: gameId }, {
		fields: {
			gameState: 1,
			gameInfos: 1,
			'stats.yourClub.score': 1,
			'stats.opponent.score': 1
		}
	});
});

Meteor.publish('oneGameForReplacement', (gameId) => {
	check(gameId, String);
	return Games.find({ _id: gameId }, {
		fields: {
			gameInfos: 1,
			gameState: 1
		}
	});
});

Meteor.publish('oneGameInfos', (gameId) => {
	check(gameId, String);
	return Games.find({ _id: gameId }, {
		fields: {
			gameInfos: 1
		}
	});
});

Meteor.publish('aGameForOwnership', (gameId) => {
	check(gameId, String);
	return Games.find({ _id: gameId }, {
		fields: {
			userId: 1
		}
	});
});

// Send back only the user's games
Meteor.publish('myGames', (userId) => {
	return Games.find({ userId });
});

// Send back only the games that have been created less than 7 days ago
Meteor.publish('liveGames', () => {
	return Games.find({
		privateGame: false,
		state: {
			$nin: ['notStarted']
		}
	});
});
