Template.stats.helpers({
	'notStarted': function() {
		if (this.state === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	'q1Running': function() {
		if (this.state === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	'q1Ended': function() {
		if (this.state === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q2Running': function() {
		if (this.state === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	'halfTime': function() {
		if (this.state === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	'q3Running': function() {
		if (this.state === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	'q3Ended': function() {
		if (this.state === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q4Running': function() {
		if (this.state === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	'gameEnded': function() {
		if (this.state === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	'bestHomeTeamPlayer': function() {
		var bestPlayer = function(team) {
			var teamSorting = [];
			var playersDataRetrieval = function(player) {
				return {
					"firstName": player.firstName,
					"lastName": player.lastName,
					"jersey": player.jersey,
					"playerIndex": player.playerIndex,
					"evaluation": player.stats.evaluation,
					"totalPoints": player.stats.points.totalPoints
				};
			};
			team.forEach(function(element, index, array) {
				teamSorting.push(playersDataRetrieval(element));
			});
			teamSorting.sort(function(a, b) {
				if (a.evaluation < b.evaluation) {
					return 1;
				}
				if (a.evaluation > b.evaluation) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
			return teamSorting[0];
		};
		return bestPlayer(this.homeTeam.players);
	},
	'bestAwayTeamPlayer': function() {
		var bestPlayer = function(team) {
			var teamSorting = [];
			var playersDataRetrieval = function(player) {
				return {
					"firstName": player.firstName,
					"lastName": player.lastName,
					"jersey": player.jersey,
					"playerIndex": player.playerIndex,
					"evaluation": player.stats.evaluation,
					"totalPoints": player.stats.points.totalPoints
				};
			};
			team.forEach(function(element, index, array) {
				teamSorting.push(playersDataRetrieval(element));
			});
			teamSorting.sort(function(a, b) {
				if (a.evaluation < b.evaluation) {
					return 1;
				}
				if (a.evaluation > b.evaluation) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
			return teamSorting[0];
		};
		return bestPlayer(this.awayTeam.players);
	},
	'awayTeamPercentage2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.awayTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamPercentage3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.awayTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamPercentage1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.awayTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.awayTeam.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamPercentage2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamPercentage3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamPercentage1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.homeTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.homeTeam.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	}
});

Template.stats.events({
	'click #notStarted': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q1Running"
			}
		});
	},
	'click #q1Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q1Ended"
			}
		});
	},
	'click #q1Ended': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q2Running"
			}
		});
	},
	'click #q2Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "halfTime"
			}
		});
	},
	'click #halfTime': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q3Running"
			}
		});
	},
	'click #q3Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q3Ended"
			}
		});
	},
	'click #q3Ended': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "q4Running"
			}
		});
	},
	'click #q4Running': function(e) {
		e.preventDefault();
		Games.update({
			_id: this._id
		}, {
			$set: {
				"state": "gameEnded"
			}
		});
	}
});


Template.stats.onRendered(function() {
	dragula(this.find('#OnBenchPlayers'));
	//dragula([this.find('#inGamePlayers'), this.find('#OnBenchPlayers')]);
});
