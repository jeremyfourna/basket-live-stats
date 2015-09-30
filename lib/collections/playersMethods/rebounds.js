Meteor.methods({
	offReb: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.rebounds.offReb": 1,
				"stats.evaluation": 1
			}
		});
	},
	defReb: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.rebounds.defReb": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionOffReb: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.rebounds.offReb": -1,
				"stats.evaluation": -1
			}
		});
	},
	correctionDefReb: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.rebounds.defReb": -1,
				"stats.evaluation": -1
			}
		});
	}
});
