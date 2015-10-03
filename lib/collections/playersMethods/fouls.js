Meteor.methods({
	offProvFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.offFouls": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionOffProvFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.offFouls": -1,
				"stats.evaluation": -1
			}
		});
	},
	defProvFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.defFouls": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionDefProvFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.provFouls.defFouls": -1,
				"stats.evaluation": -1
			}
		});
	},
	offFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.offFouls": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionOffFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.offFouls": -1,
				"stats.evaluation": 1
			}
		});
	},
	defFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.defFouls": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionDefFouls: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.defFouls": -1,
				"stats.evaluation": 1
			}
		});
	}
});
