Meteor.methods({
	blocksTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.blocks": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionBlocksTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.blocks": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	}
});
