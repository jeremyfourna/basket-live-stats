Meteor.methods({
	offProvFoulTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionOffProvFoulTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
