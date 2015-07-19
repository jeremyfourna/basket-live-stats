Meteor.methods({
	stateSwitch: function(gameId, status) {
		check(gameId, {
			id: String
		});
		check(status, {
			state: String
		});
		Games.update({
			_id: gameId.id
		}, {
			$set: {
				state: status.state
			}
		});
	}
});
