Meteor.methods({
	blocks: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.blocks": 1,
				"stats.evaluation": 1
			}
		});
	},
	correctionBlocks: function(playerId) {
		Players.update({
			_id: playerId
		}, {
			$inc: {
				"stats.blocks": -1,
				"stats.evaluation": -1
			}
		});
	}
});
