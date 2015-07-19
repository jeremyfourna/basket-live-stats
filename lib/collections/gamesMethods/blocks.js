Meteor.methods({
	blocks: function(actionInfo) {
		check(actionInfo, {
			gameId: String,
			playerIndex: Number,
			team: String
		});
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
	},
	correctionBlocks: function(actionInfo) {
		check(actionInfo, {
			gameId: String,
			playerIndex: Number,
			team: String
		});
		if (actionInfo.playerIndex === 0) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.0.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.0.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 1) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.1.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.1.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 2) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.2.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.2.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 3) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.3.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.3.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 4) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.4.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.4.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 5) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.5.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.5.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 6) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.6.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.6.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 7) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.7.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.7.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 8) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.8.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.8.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 9) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.9.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.9.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 10) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.10.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.10.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (actionInfo.playerIndex === 11) {
			if (actionInfo.team === "homeTeam") {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"homeTeam.players.11.stats.blocks": -1,
						"gameStats.blocks.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: actionInfo.gameId
				}, {
					$inc: {
						"awayTeam.players.11.stats.blocks": -1,
						"gameStats.blocks.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
	}
});
