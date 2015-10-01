Meteor.methods({
	offProvFoulTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": 1,
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
	},
	defProvFoulTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionDefProvFoulTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
