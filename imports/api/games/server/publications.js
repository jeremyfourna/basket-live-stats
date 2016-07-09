import { Meteor } from 'meteor/meteor';

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
Meteor.publish('oneGame', (gameId) => {
	return Games.find({ _id: gameId });
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
