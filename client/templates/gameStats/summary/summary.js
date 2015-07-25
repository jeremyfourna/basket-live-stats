Template.summary.helpers({
	'total2PointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'percentage2PointsShoots': function() {
		var twoPointsIn = this.stats.points.twoPointsIn;
		var twoPointsOut = this.stats.points.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total3PointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'percentage3PointsShoots': function() {
		var threePointsIn = this.stats.points.threePointsIn;
		var threePointsOut = this.stats.points.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'total1PointShoots': function() {
		var onePointIn = this.stats.points.onePointIn;
		var onePointOut = this.stats.points.onePointOut;
		return onePointIn + onePointOut;
	},
	'percentage1PointShoots': function() {
		var onePointIn = this.stats.points.onePointIn;
		var onePointOut = this.stats.points.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'totalRebounds': function() {
		var offReb = this.stats.rebounds.offReb;
		var defReb = this.stats.rebounds.defReb;
		return offReb + defReb;
	},
	'provokedFouls': function() {
		var offFouls = this.stats.fouls.provFouls.offFouls;
		var defFouls = this.stats.fouls.provFouls.defFouls;
		var diff = offFouls + defFouls;
		return diff;
	},
	'foulsRatio': function() {
		var offFouls = this.stats.fouls.provFouls.offFouls;
		var defFouls = this.stats.fouls.provFouls.defFouls;
		var totalFouls = this.stats.fouls.totalFouls;
		return offFouls + defFouls - totalFouls;
	},
	'homeTeamFoulsRatio': function() {
		var offFouls = this.gameStats.fouls.homeTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.homeTeam.provFouls.defFouls;
		var totalFouls = this.gameStats.fouls.homeTeam.totalFouls;
		return offFouls + defFouls - totalFouls;
	},
	'homeTeamTotal2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'homeTeamPercentage2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.homeTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.homeTeam.twoPointsOut;
		var total = twoPointsIn + twoPointsOut;
		var percentage = twoPointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotal3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'homeTeamPercentage3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.homeTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.homeTeam.threePointsOut;
		var total = threePointsIn + threePointsOut;
		var percentage = threePointsIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotal1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.homeTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.homeTeam.onePointOut;
		return onePointIn + onePointOut;
	},
	'homeTeamPercentage1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.homeTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.homeTeam.onePointOut;
		var total = onePointIn + onePointOut;
		var percentage = onePointIn / total * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'homeTeamTotalRebounds': function() {
		var offReb = this.gameStats.rebounds.homeTeam.offReb;
		var defReb = this.gameStats.rebounds.homeTeam.defReb;
		return offReb + defReb;
	},
	'homeTeamProvokedFouls': function() {
		var offFouls = this.gameStats.fouls.homeTeam.provFouls.offFouls;
		var defFouls = this.gameStats.fouls.homeTeam.provFouls.defFouls;
		var diff = offFouls + defFouls;
		return diff;
	},
	'awayTeamTotal2PointsShoots': function() {
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var twoPointsOut = this.gameStats.shoots.awayTeam.twoPointsOut;
		return twoPointsIn + twoPointsOut;
	},
	'awayTeamTotal3PointsShoots': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var threePointsOut = this.gameStats.shoots.awayTeam.threePointsOut;
		return threePointsIn + threePointsOut;
	},
	'awayTeamTotal1PointShoots': function() {
		var onePointIn = this.gameStats.shoots.awayTeam.onePointIn;
		var onePointOut = this.gameStats.shoots.awayTeam.onePointOut;
		return onePointIn + onePointOut;
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
		var player = bestPlayer(this.homeTeam.players);
		return player;
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
					"totalPoints": player.stats.points.totalPoints
				};
			};
			team.forEach(function(element, index, array) {
				teamSorting.push(playersDataRetrieval(element));
			});
			teamSorting.sort(function(a, b) {
				if (a.totalPoints < b.totalPoints) {
					return 1;
				}
				if (a.totalPoints > b.totalPoints) {
					return -1;
				}
				// a must be equal to b
				return 0;
			});
			return teamSorting[0];
		};
		var player = bestPlayer(this.awayTeam.players);
		return player;
	},
	'awayTeamTwoPointsPartition': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var percentage = twoPointsIn / (threePointsIn + twoPointsIn) * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'awayTeamThreePointsPartition': function() {
		var threePointsIn = this.gameStats.shoots.awayTeam.threePointsIn;
		var twoPointsIn = this.gameStats.shoots.awayTeam.twoPointsIn;
		var percentage = threePointsIn / (threePointsIn + twoPointsIn) * 100;
		var roundPercentage = Math.floor(percentage);
		return roundPercentage || 0;
	},
	'isInPlay': function() {
		if (this.inPlay) {
			return 'inPlay';
		} else {
			return false;
		}
	},
	'playerTime': function() {
		var playerTimeMinutes = 0;
		var playerTimeSecondes = 0;
		var gameState = Template.parentData(1).state;
		var modulo = this.gameTime.length % 2;
		var i = 0;
		var quarterPower = 0;
		if (this.gameTime.length === 0) {
			return "00:00";
		} else if (modulo === 0) {
			for (i = 0; i < this.gameTime.length; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case "notStarted":
						quarterPower = 10;
						break;
					case "q1Running":
						quarterPower = 10;
						break;
					case "q1Ended":
						quarterPower = 10;
						break;
					case "q2Running":
						quarterPower = 20;
						break;
					case "halfTime":
						quarterPower = 20;
						break;
					case "q3Running":
						quarterPower = 30;
						break;
					case "q3Ended":
						quarterPower = 30;
						break;
					case "q4Running":
						quarterPower = 40;
						break;
					case "gameEnded":
						quarterPower = 40;
						break;
					default:
						quarterPower = 0;
				}
				if (this.gameTime[i].way === 'in') {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
					playerTimeMinutes -= quarterPower;
				} else if (this.gameTime[i].way === 'out') {
					playerTimeMinutes -= this.gameTime[i].minutes;
					playerTimeSecondes -= this.gameTime[i].secondes;
					playerTimeMinutes += quarterPower;
					if (playerTimeSecondes < 0) {
						playerTimeMinutes -= 1;
						playerTimeSecondes += 60;
					}
				}
			}
			if (playerTimeSecondes < 10) {
				playerTimeSecondes = '0' + playerTimeSecondes;
			}
			if (playerTimeMinutes < 10) {
				playerTimeMinutes = '0' + playerTimeMinutes;
			}
			return playerTimeMinutes + ":" + playerTimeSecondes;
		} else if (modulo === 1) {
			for (i = 0; i < this.gameTime.length - 1; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case "notStarted":
						quarterPower = 10;
						break;
					case "q1Running":
						quarterPower = 10;
						break;
					case "q1Ended":
						quarterPower = 10;
						break;
					case "q2Running":
						quarterPower = 20;
						break;
					case "halfTime":
						quarterPower = 20;
						break;
					case "q3Running":
						quarterPower = 30;
						break;
					case "q3Ended":
						quarterPower = 30;
						break;
					case "q4Running":
						quarterPower = 40;
						break;
					case "gameEnded":
						quarterPower = 40;
						break;
					default:
						quarterPower = 0;
				}
				if (i === this.gameTime.length - 1) {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
				} else if (this.gameTime[i].way === 'in') {
					playerTimeMinutes += this.gameTime[i].minutes;
					playerTimeSecondes += this.gameTime[i].secondes;
					playerTimeMinutes -= quarterPower;
				} else if (this.gameTime[i].way === 'out') {
					playerTimeMinutes -= this.gameTime[i].minutes;
					playerTimeSecondes -= this.gameTime[i].secondes;
					playerTimeMinutes += quarterPower;
					if (playerTimeSecondes < 0) {
						playerTimeMinutes -= 1;
						playerTimeSecondes += 60;
					}
				}
			}
			if (playerTimeSecondes < 10) {
				playerTimeSecondes = '0' + playerTimeSecondes;
			}
			if (playerTimeMinutes < 10) {
				playerTimeMinutes = '0' + playerTimeMinutes;
			}
			return playerTimeMinutes + ":" + playerTimeSecondes;
		}
	}
});


Template.summary.rendered = function() {
	var self = this;
	var chart = c3.generate({
		size: {
			height: 240
		},
		bindto: this.find('#gameGapChart'),
		data: {
			xs: {
				'data1': 'x'
			},
			columns: [
				['data1']
			]
		},
		axis: {
			x: {
				show: false
			}
		}
	});

	this.autorun(function(tracker) {
		var gameData = Games.find({
			_id: self.data._id
		}, {
			fields: {
				'gameStats.evolution': 1
			}
		}).fetch();
		var xArray = ['x'];
		var yArray = ['data1'];
		for (var i = 0; i < gameData[0].gameStats.evolution.length; i++) {
			xArray.push(gameData[0].gameStats.evolution[i][0]);
			yArray.push(gameData[0].gameStats.evolution[i][1]);
		}
		chart.load({
			columns: [
				xArray,
				yArray, []
			]
		});
	});
};
