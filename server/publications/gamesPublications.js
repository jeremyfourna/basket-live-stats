// Publication who send back everything, use it carrefully
Meteor.publish('games', function() {
	return Games.find();
});

// Publication who send back the last 3 live games
Meteor.publish('last3LiveGames', function() {
	return Games.find({
		state: {
			$nin: ['gameEnded', 'notStarted']
		},
		privateGame: false
	}, {
		limit: 3
	});
});

// Publication who send back the last 3 ended games
Meteor.publish('last3EndedGames', function() {
	return Games.find({
		state: 'gameEnded',
		privateGame: false
	}, {
		limit: 3
	});
});

// Send back one game
Meteor.publish('oneGame', function(gameId) {
	return Games.find({
		_id: gameId
	});
});

// Send back only the user's games
Meteor.publish('myGames', function(userId) {
	return Games.find({
		userId: userId
	});
});

// Send back only the games that have been created less than 7 days ago
Meteor.publish('liveGames', function() {
	return Games.find({
		privateGame: false,
		state: {
			$nin: ['notStarted']
		}
	});
});
