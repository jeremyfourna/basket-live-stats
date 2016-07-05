Meteor.publish('playersForAGame', function(gameId) {
	return Players.find({
		gameId: gameId
	});
});
