Meteor.methods({
	GameStateSwitch: function(gameId, status) {
		Games.update({
			_id: gameId
		}, {
			$set: {
				gameState: status
			}
		});
	}
});
