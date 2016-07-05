Meteor.methods({
	assistsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.assists": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionAssistsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.assists": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
