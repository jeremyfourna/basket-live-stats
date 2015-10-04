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
				"stats.fouls.totalFouls": 1,
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
				"stats.fouls.totalFouls": -1,
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
				"stats.fouls.totalFouls": 1,
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
				"stats.fouls.totalFouls": -1,
				"stats.evaluation": 1
			}
		});
	},
	defFoulsOneFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul1FT": 1,
				"stats.fouls.totalFouls": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionDefFoulsOneFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul1FT": -1,
				"stats.fouls.totalFouls": -1,
				"stats.evaluation": 1
			}
		});
	},
	defFoulsTwoFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul2FT": 1,
				"stats.fouls.totalFouls": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionDefFoulsTwoFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul2FT": -1,
				"stats.fouls.totalFouls": -1,
				"stats.evaluation": 1
			}
		});
	},
	defFoulsThreeFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul3FT": 1,
				"stats.fouls.totalFouls": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionDefFoulsThreeFT: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.fouls.foul3FT": -1,
				"stats.fouls.totalFouls": -1,
				"stats.evaluation": 1
			}
		});
	}
});
