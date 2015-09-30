Meteor.methods({
	offRebTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.rebounds.offReb": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defRebTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.rebounds.defReb": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionOffRebTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.rebounds.offReb": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefRebTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.rebounds.defReb": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
