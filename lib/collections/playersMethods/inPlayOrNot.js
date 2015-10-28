Meteor.methods({
	goingInPlay: function(playerData) {
		Players.update({
			_id: playerData._id
		}, {
			$set: {
				inPlay: true,
			},
			$push: {
				gameTime: {
					minutes: playerData.minutes,
					secondes: playerData.secondes,
					way: 'in',
					gameState: playerData.state
				}
			}
		});
	},
	goingOnTheBench: function(playerData) {
		Players.update({
			_id: playerData._id
		}, {
			$set: {
				inPlay: false,
			},
			$push: {
				gameTime: {
					minutes: playerData.minutes,
					secondes: playerData.secondes,
					way: 'out',
					gameState: playerData.state
				}
			}
		});
	}
});
