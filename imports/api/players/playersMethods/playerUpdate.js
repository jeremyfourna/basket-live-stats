Meteor.methods({
	playerUpdate: function(playerData) {
		Players.update({
			_id: playerData.playerId
		}, {
			$set: {
				firstName: playerData.firstName,
				lastName: playerData.lastName
			}
		});
	}
});
