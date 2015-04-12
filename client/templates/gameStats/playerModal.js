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
						"homeTeam.players.0.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.onePointIn": 1,
						"awayTeam.players.0.stats.points.totalPoint": 1
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
						"homeTeam.players.1.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.onePointIn": 1,
						"awayTeam.players.1.stats.points.totalPoint": 1
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
						"homeTeam.players.2.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.onePointIn": 1,
						"awayTeam.players.2.stats.points.totalPoint": 1
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
						"homeTeam.players.3.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.onePointIn": 1,
						"awayTeam.players.3.stats.points.totalPoint": 1
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
						"homeTeam.players.4.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.onePointIn": 1,
						"awayTeam.players.4.stats.points.totalPoint": 1
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
						"homeTeam.players.5.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.onePointIn": 1,
						"awayTeam.players.5.stats.points.totalPoint": 1
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
						"homeTeam.players.6.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.onePointIn": 1,
						"awayTeam.players.6.stats.points.totalPoint": 1
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
						"homeTeam.players.7.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.onePointIn": 1,
						"awayTeam.players.7.stats.points.totalPoint": 1
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
						"homeTeam.players.8.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.onePointIn": 1,
						"awayTeam.players.8.stats.points.totalPoint": 1
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
						"homeTeam.players.9.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.onePointIn": 1,
						"awayTeam.players.9.stats.points.totalPoint": 1
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
						"homeTeam.players.10.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.onePointIn": 1,
						"awayTeam.players.10.stats.points.totalPoint": 1
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
						"homeTeam.players.11.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.onePointIn": 1,
						"awayTeam.players.11.stats.points.totalPoint": 1
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
						"homeTeam.players.12.stats.points.totalPoint": 1
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.onePointIn": 1,
						"awayTeam.players.12.stats.points.totalPoint": 1
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
						"homeTeam.players.0.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.twoPointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoint": 2
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
						"homeTeam.players.1.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.twoPointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoint": 2
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
						"homeTeam.players.2.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.twoPointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoint": 2
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
						"homeTeam.players.3.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.twoPointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoint": 2
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
						"homeTeam.players.4.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.twoPointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoint": 2
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
						"homeTeam.players.5.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.twoPointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoint": 2
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
						"homeTeam.players.6.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.twoPointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoint": 2
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
						"homeTeam.players.7.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.twoPointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoint": 2
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
						"homeTeam.players.8.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.twoPointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoint": 2
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
						"homeTeam.players.9.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.twoPointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoint": 2
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
						"homeTeam.players.10.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.twoPointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoint": 2
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
						"homeTeam.players.11.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.twoPointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoint": 2
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
						"homeTeam.players.12.stats.points.totalPoint": 2
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.twoPointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoint": 2
					}
				});
			}
		}
		return console.log("1 point for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
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
						"homeTeam.players.0.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.0.stats.points.threePointsIn": 1,
						"awayTeam.players.0.stats.points.totalPoint": 3
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
						"homeTeam.players.1.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.1.stats.points.threePointsIn": 1,
						"awayTeam.players.1.stats.points.totalPoint": 3
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
						"homeTeam.players.2.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.2.stats.points.threePointsIn": 1,
						"awayTeam.players.2.stats.points.totalPoint": 3
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
						"homeTeam.players.3.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.3.stats.points.threePointsIn": 1,
						"awayTeam.players.3.stats.points.totalPoint": 3
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
						"homeTeam.players.4.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.4.stats.points.threePointsIn": 1,
						"awayTeam.players.4.stats.points.totalPoint": 3
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
						"homeTeam.players.5.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.5.stats.points.threePointsIn": 1,
						"awayTeam.players.5.stats.points.totalPoint": 3
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
						"homeTeam.players.6.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.6.stats.points.threePointsIn": 1,
						"awayTeam.players.6.stats.points.totalPoint": 3
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
						"homeTeam.players.7.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.7.stats.points.threePointsIn": 1,
						"awayTeam.players.7.stats.points.totalPoint": 3
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
						"homeTeam.players.8.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.8.stats.points.threePointsIn": 1,
						"awayTeam.players.8.stats.points.totalPoint": 3
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
						"homeTeam.players.9.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.9.stats.points.threePointsIn": 1,
						"awayTeam.players.9.stats.points.totalPoint": 3
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
						"homeTeam.players.10.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.10.stats.points.threePointsIn": 1,
						"awayTeam.players.10.stats.points.totalPoint": 3
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
						"homeTeam.players.11.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.11.stats.points.threePointsIn": 1,
						"awayTeam.players.11.stats.points.totalPoint": 3
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
						"homeTeam.players.12.stats.points.totalPoint": 3
					}
				});
			} else {
				Games.update({
					_id: parentData._id
				}, {
					$inc: {
						"awayTeam.players.12.stats.points.threePointsIn": 1,
						"awayTeam.players.12.stats.points.totalPoint": 3
					}
				});
			}
		}
		return console.log("1 point for number " + Session.get('currentPlayerForModal').jersey + " of " + Session.get('currentPlayerForModal').team);
	}
});
