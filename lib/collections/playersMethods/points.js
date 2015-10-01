Meteor.methods({
	onePoint: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointIn": 1,
				"stats.points.totalPoints": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionOnePoint: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointIn": -1,
				"stats.points.totalPoints": -1,
				"stats.evaluation": -1
			}
		});
	},
	onePointMiss: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointOut": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionOnePointMiss: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.onePointOut": -1,
				"stats.evaluation": 1
			}
		});
	},
	twoPoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.twoPointsIn": 1,
				"stats.points.totalPoints": 2,
				"stats.evaluation": 2
			}
		});
	},
	correctionTwoPoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.twoPointsIn": -1,
				"stats.points.totalPoints": -2,
				"stats.evaluation": -2
			}
		});
	},
	threePoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.threePointsIn": 1,
				"stats.points.totalPoints": 3,
				"stats.evaluation": 3
			}
		});
	},
	correctionThreePoints: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.points.threePointsIn": -1,
				"stats.points.totalPoints": -3,
				"stats.evaluation": -3
			}
		});
	}
});
