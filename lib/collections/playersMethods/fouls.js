Meteor.methods({
	offProvFoul: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.offFouls": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionOffProvFoul: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.offFouls": -1,
				"stats.evaluation": -1
			}
		});
	},
	defProvFoul: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.defFouls": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionDefProvFoul: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.defFouls": -1,
				"stats.evaluation": -1
			}
		});
	}
});
