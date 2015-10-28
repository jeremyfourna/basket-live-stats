Meteor.methods({
	turnoversTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.turnovers": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionTurnoversTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.turnovers": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	}
});
