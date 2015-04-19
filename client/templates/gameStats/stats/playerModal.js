Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
	// Positive action
	'click #onePoint': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.onePointIn": 1,
						"gameStats.shoots.homeTeam.onePointIn": 1,
						"homeTeam.players.12.stats.points.totalPoints": 1,
						"gameStats.score.homeTeam": 1,
						"gameStats.evaluation.homeTeam": 1,
						"homeTeam.players.12.stats.evaluation": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.onePointIn": 1,
						"gameStats.shoots.awayTeam.onePointIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 1,
						"gameStats.score.awayTeam": 1,
						"gameStats.evaluation.awayTeam": 1,
						"awayTeam.players.12.stats.evaluation": 1
					}
				});
			}
		}
		return console.log("1 point for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	},
	'click #twoPoint': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.0.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.0.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.1.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.1.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.2.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.2.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.3.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.3.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.4.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.4.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.5.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.5.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.6.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.6.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.7.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.7.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.8.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.8.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.9.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.9.stats.evaluation": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.10.stats.evaluation": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.10.stats.evaluation ": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.11.stats.evaluation ": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.11.stats.evaluation ": 2
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.twoPointsIn": 1,
						"gameStats.shoots.homeTeam.twoPointsIn": 1,
						"homeTeam.players.12.stats.points.totalPoints": 2,
						"gameStats.score.homeTeam": 2,
						"gameStats.evaluation.homeTeam": 2,
						"homeTeam.players.12.stats.evaluation ": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.twoPointsIn": 1,
						"gameStats.shoots.awayTeam.twoPointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 2,
						"gameStats.score.awayTeam": 2,
						"gameStats.evaluation.awayTeam": 2,
						"awayTeam.players.12.stats.evaluation ": 2
					}
				});
			}
		}
		return console.log("2 points for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	},
	'click #threePoint': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.0.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.0.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.0.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.1.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.1.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.1.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.2.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.2.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.2.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.3.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.3.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.3.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.4.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.4.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.4.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.5.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.5.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.5.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.6.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.6.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.6.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.7.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.7.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.7.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.8.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.8.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.8.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.9.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.9.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.9.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.10.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.10.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.10.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.11.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.11.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.11.stats.evaluation": 3
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.threePointsIn": 1,
						"gameStats.shoots.homeTeam.threePointsIn": 1,
						"homeTeam.players.12.stats.points.totalPoints": 3,
						"gameStats.score.homeTeam": 3,
						"gameStats.evaluation.homeTeam": 3,
						"homeTeam.players.12.stats.evaluation": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.threePointsIn": 1,
						"gameStats.shoots.awayTeam.threePointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 3,
						"gameStats.score.awayTeam": 3,
						"gameStats.evaluation.awayTeam": 3,
						"awayTeam.players.12.stats.evaluation": 3
					}
				});
			}
		}
		return console.log("3 points for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	},
	'click #assist': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.assists": 1,
						"gameStats.assists.homeTeam": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.assists": 1,
						"gameStats.assists.awayTeam": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just gived an assist !");
	},
	'click #offReb': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.rebounds.offReb": 1,
						"gameStats.rebounds.homeTeam.offReb": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.rebounds.offReb": 1,
						"gameStats.rebounds.awayTeam.offReb": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just catched an offensive rebond !");
	},
	'click #defReb': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.rebounds.defReb": 1,
						"gameStats.rebounds.homeTeam.defReb": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.rebounds.defReb": 1,
						"gameStats.rebounds.awayTeam.defReb": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just catched a defensive rebond !");
	},
	'click #offProvFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.offFouls": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.provFouls.offFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.offFouls": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just povoqued a foul from a defender !");
	},
	'click #steal': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.steals": 1,
						"gameStats.steals.homeTeam": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.steals": 1,
						"gameStats.steals.awayTeam": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just stealsed the ball from an attacker !");
	},
	'click #block': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
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
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.blocks": 1,
						"gameStats.blocks.homeTeam": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.blocks": 1,
						"gameStats.blocks.awayTeam": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just blocksed a shoot !");
	},
	'click #defProvFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.0.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.1.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.2.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.3.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.4.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.5.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.6.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.7.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.8.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.9.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.10.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.11.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.homeTeam.provFouls.defFouls": 1,
						"homeTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.homeTeam": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.provFouls.defFouls": 1,
						"gameStats.fouls.awayTeam.provFouls.defFouls": 1,
						"awayTeam.players.12.stats.evaluation": 1,
						"gameStats.evaluation.awayTeam": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just provoqued a foul from an attacker !");
	},
	// Negative action
	'click #onePointMiss': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.0.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.0.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.1.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.1.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.2.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.2.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.3.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.3.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.4.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.4.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.5.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.5.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.6.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.6.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.7.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.7.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.8.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.8.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.9.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.9.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.10.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.10.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.11.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.11.stats.evaluation": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.onePointOut": 1,
						"gameStats.shoots.homeTeam.onePointOut": 1,
						"gameStats.evaluation.homeTeam": -1,
						"homeTeam.players.12.stats.evaluation": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.onePointOut": 1,
						"gameStats.shoots.awayTeam.onePointOut": 1,
						"gameStats.evaluation.awayTeam": -1,
						"awayTeam.players.12.stats.evaluation": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just missed a free throw !");
	},
	'click #twoPointMiss': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.twoPointsOut": 1,
						"gameStats.shoots.homeTeam.twoPointsOut": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.twoPointsOut": 1,
						"gameStats.shoots.awayTeam.twoPointsOut": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just missed a 2 points shot !");
	},
	'click #threePointMiss': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.threePointsOut": 1,
						"gameStats.shoots.homeTeam.threePointsOut": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1,
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.threePointsOut": 1,
						"gameStats.shoots.awayTeam.threePointsOut": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just missed a 3 points shot !");
	},
	'click #turnover': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.turnovers": 1,
						"gameStats.turnovers.homeTeam": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.turnovers": 1,
						"gameStats.turnovers.awayTeam": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just loosed the ball !");
	},
	'click #offFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.offFouls": 1,
						"gameStats.fouls.homeTeam.offFouls": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.offFouls": 1,
						"gameStats.fouls.awayTeam.offFouls": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just commited an offensive foul !");
	},
	'click #defFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.foul": 1,
						"gameStats.fouls.homeTeam.foul": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.foul": 1,
						"gameStats.fouls.awayTeam.foul": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " received a foul !");
	},
	'click #defFoulOneFT': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.foul1FT": 1,
						"gameStats.fouls.homeTeam.foul1FT": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.foul1FT": 1,
						"gameStats.fouls.awayTeam.foul1FT": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just commited a foul on a succesful shoot !");
	},
	'click #defFoulTwoFT': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.foul2FT": 1,
						"gameStats.fouls.homeTeam.foul2FT": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.foul2FT": 1,
						"gameStats.fouls.awayTeam.foul2FT": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just commited a foul on a 2 points shoot !");
	},
	'click #defFoulthreeFT': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.foul3FT": 1,
						"gameStats.fouls.homeTeam.foul3FT": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.foul3FT": 1,
						"gameStats.fouls.awayTeam.foul3FT": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just commited a foul on a 3 points shoot !");
	},
	'click #techFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.techFouls": 1,
						"gameStats.fouls.homeTeam.techFouls": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.techFouls": 1,
						"gameStats.fouls.awayTeam.techFouls": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just received a technical foul !");
	},
	'click #antiSportFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.homeTeam.antiSportFouls": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.antiSportFouls": 1,
						"gameStats.fouls.awayTeam.antiSportFouls": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just received an unsportsmanlike foul!");
	},
	'click #disqualifyingFoul': function(e) {
		var team = Session.get('currentPlayerForModal').team;
		var playerIndex = Session.get('currentPlayerForModal').playerIndex;
		var parentData = Template.parentData(1);
		if (Session.get('currentPlayerForModal').playerIndex === 0) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.0.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.0.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.1.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.2.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.3.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.4.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.5.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.6.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.7.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.8.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.9.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.10.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.11.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.homeTeam.disqualifyingFouls": 1,
						"homeTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.homeTeam.totalFouls": 1,
						"homeTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.homeTeam": -1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.disqualifyingFouls": 1,
						"gameStats.fouls.awayTeam.disqualifyingFouls": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1,
						"gameStats.fouls.awayTeam.totalFouls": 1,
						"awayTeam.players.12.stats.evaluation": -1,
						"gameStats.evaluation.awayTeam": -1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just received a disqualifying foul !");
	}
});
