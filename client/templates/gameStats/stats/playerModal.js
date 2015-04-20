Template.playerModal.helpers({
	'currentPlayerDoingAction': function() {
		return Session.get('currentPlayerForModal').firstName.charAt(0) + ". " + Session.get('currentPlayerForModal').lastName;
	}
});

Template.playerModal.events({
	// Positive action
	'click #onePoint': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('onePoint', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #twoPoint': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('twoPoints', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #threePoint': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('threePoints', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #assist': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('assists', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #offReb': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('offRebs', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defReb': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defRebs', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #offProvFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('offProvFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #steal': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('steals', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #block': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('blocks', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #defProvFoul': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('defProvFouls', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	// Negative action
	'click #onePointMiss': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('onePointMiss', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #twoPointMiss': function(e) {
		var actionInfo = {
			gameId: Template.parentData(1)._id,
			playerIndex: Session.get('currentPlayerForModal').playerIndex,
			team: Session.get('currentPlayerForModal').team
		};
		Meteor.call('twoPointsMiss', actionInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
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
