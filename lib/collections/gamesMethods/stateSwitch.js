Meteor.methods({
	stateSwitch: function(gameId, status) {
		Games.update({
			_id: gameId.id
		}, {
			$set: {
				state: status.state
			}
		});
	}
});
