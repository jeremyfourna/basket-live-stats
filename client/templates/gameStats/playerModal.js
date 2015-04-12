Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
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
						"homeTeam.players.0.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 1
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
						"homeTeam.players.1.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 1
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
						"homeTeam.players.2.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 1
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
						"homeTeam.players.3.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 1
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
						"homeTeam.players.4.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 1
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
						"homeTeam.players.5.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 1
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
						"homeTeam.players.6.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 1
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
						"homeTeam.players.7.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 1
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
						"homeTeam.players.8.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 1
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
						"homeTeam.players.9.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 1
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
						"homeTeam.players.10.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 1
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
						"homeTeam.players.11.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 1
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
						"homeTeam.players.12.stats.points.totalPoints": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.onePointIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 1
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
						"homeTeam.players.0.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 2
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
						"homeTeam.players.1.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 2
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
						"homeTeam.players.2.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 2
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
						"homeTeam.players.3.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 2
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
						"homeTeam.players.4.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 2
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
						"homeTeam.players.5.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 2
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
						"homeTeam.players.6.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 2
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
						"homeTeam.players.7.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 2
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
						"homeTeam.players.8.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 2
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
						"homeTeam.players.9.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 2
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
						"homeTeam.players.10.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 2
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
						"homeTeam.players.11.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 2
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
						"homeTeam.players.12.stats.points.totalPoints": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.twoPointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 2
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
						"homeTeam.players.0.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoints": 3
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
						"homeTeam.players.1.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoints": 3
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
						"homeTeam.players.2.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoints": 3
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
						"homeTeam.players.3.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoints": 3
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
						"homeTeam.players.4.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoints": 3
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
						"homeTeam.players.5.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoints": 3
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
						"homeTeam.players.6.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoints": 3
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
						"homeTeam.players.7.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoints": 3
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
						"homeTeam.players.8.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoints": 3
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
						"homeTeam.players.9.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoints": 3
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
						"homeTeam.players.10.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoints": 3
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
						"homeTeam.players.11.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoints": 3
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
						"homeTeam.players.12.stats.points.totalPoints": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.threePointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoints": 3
					}
				});
			}
		}
		return console.log("3 points for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	},
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
						"homeTeam.players.0.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.onePointOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.onePointOut": 1
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
						"homeTeam.players.0.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsOut": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.twoPointsOut": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.twoPointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.twoPointsOut": 1
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
						"homeTeam.players.0.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsOut": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.points.threePointsOut": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.threePointsOut": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just missed a 3 points shot !");
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
						"homeTeam.players.0.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.assists": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.assists": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.assists": 1
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
						"homeTeam.players.0.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebonds.offReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.rebonds.offReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.rebonds.offReb": 1
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
						"homeTeam.players.0.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.rebonds.defReb": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.rebonds.defReb": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.rebonds.defReb": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just catched a defensive rebond !");
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
						"homeTeam.players.0.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.turnover": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.turnover": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.turnover": 1
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
						"homeTeam.players.0.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.offFouls": 1,
						"awayTeam.players.0.stats.fouls.totalFouls": 1
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
						"homeTeam.players.1.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.offFouls": 1,
						"awayTeam.players.1.stats.fouls.totalFouls": 1
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
						"homeTeam.players.2.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.offFouls": 1,
						"awayTeam.players.2.stats.fouls.totalFouls": 1
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
						"homeTeam.players.3.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.offFouls": 1,
						"awayTeam.players.3.stats.fouls.totalFouls": 1
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
						"homeTeam.players.4.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.offFouls": 1,
						"awayTeam.players.4.stats.fouls.totalFouls": 1
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
						"homeTeam.players.5.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.offFouls": 1,
						"awayTeam.players.5.stats.fouls.totalFouls": 1
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
						"homeTeam.players.6.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.offFouls": 1,
						"awayTeam.players.6.stats.fouls.totalFouls": 1
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
						"homeTeam.players.7.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.offFouls": 1,
						"awayTeam.players.7.stats.fouls.totalFouls": 1
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
						"homeTeam.players.8.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.offFouls": 1,
						"awayTeam.players.8.stats.fouls.totalFouls": 1
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
						"homeTeam.players.9.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.offFouls": 1,
						"awayTeam.players.9.stats.fouls.totalFouls": 1
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
						"homeTeam.players.10.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.offFouls": 1,
						"awayTeam.players.10.stats.fouls.totalFouls": 1
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
						"homeTeam.players.11.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.offFouls": 1,
						"awayTeam.players.11.stats.fouls.totalFouls": 1
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
						"homeTeam.players.12.stats.fouls.totalFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.offFouls": 1,
						"awayTeam.players.12.stats.fouls.totalFouls": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just commited an offensive foul !");
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
						"homeTeam.players.0.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.fouls.provFoul.offFouls": 1

					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.fouls.provFoul.offFouls": 1

					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.fouls.provFoul.offFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.fouls.provFoul.offFouls": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.fouls.provFoul.offFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.fouls.provFoul.offFouls": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.fouls.provFoul.offFouls": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.fouls.provFoul.offFouls": 1
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
						"homeTeam.players.0.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 1) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.1.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 2) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.2.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 3) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.3.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 4) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.4.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 5) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.5.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 6) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.6.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 7) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.7.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 8) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.8.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 9) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.9.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 10) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.10.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 11) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.11.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.steal": 1
					}
				});
			}
		} else if (Session.get('currentPlayerForModal').playerIndex === 12) {
			if (Session.get('currentPlayerForModal').team === "homeTeam") {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"homeTeam.players.12.stats.steal": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.steal": 1
					}
				});
			}
		}
		return console.log("Number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team + " just stealed the ball from an attacker !");
	}
});
