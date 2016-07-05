Meteor.methods({
	gameDelete: function(gameId) {
		Games.remove({
			_id: gameId
		});
	}
});
