Meteor.methods({
	stealsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.steals": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionStealsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.steals": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
