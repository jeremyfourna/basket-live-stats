Meteor.methods({
	turnovers: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.turnovers": 1,
				"stats.evaluation": -1
			}
		});
	},
	correctionTurnovers: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.turnovers": -1,
				"stats.evaluation": 1
			}
		});
	}
});
