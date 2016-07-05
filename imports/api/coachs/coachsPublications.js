Meteor.publish('coachsForAGame', function(gameId) {
	return Coachs.find({
		gameId: gameId
	});
});
