Template.summary.helpers({
	'gameData': function() {
		return Games.findOne(Router.current().params._id);
	},
	playerDataYourClub: function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	playerDataOpponent: function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent'
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	'notStarted': function() {
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	'q1Running': function() {
		if (this.gameState === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	'q1Ended': function() {
		if (this.gameState === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q2Running': function() {
		if (this.gameState === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	'halfTime': function() {
		if (this.gameState === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	'q3Running': function() {
		if (this.gameState === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	'q3Ended': function() {
		if (this.gameState === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	'q4Running': function() {
		if (this.gameState === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	'gameEnded': function() {
		if (this.gameState === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	'oT1': function() {
		if (this.gameState === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	'oT2': function() {
		if (this.gameState === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	'oT3': function() {
		if (this.gameState === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	'oT4': function() {
		if (this.gameState === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	'oT5': function() {
		if (this.gameState === 'oT5') {
			return true;
		} else {
			return false;
		}
	},
	'total2PointsShoots': function() {
		return this.stats.points.twoPointsIn + this.stats.points.twoPointsOut;
	},
	'percentage2PointsShoots': function() {
		return Math.floor(this.stats.points.twoPointsIn / (this.stats.points.twoPointsIn + this.stats.points.twoPointsOut) * 100) || 0;
	},
	'total3PointsShoots': function() {
		return this.stats.points.threePointsIn + this.stats.points.threePointsOut;
	},
	'percentage3PointsShoots': function() {
		return Math.floor(this.stats.points.threePointsIn / (this.stats.points.threePointsIn + this.stats.points.threePointsOut) * 100) || 0;
	},
	'total1PointShoots': function() {
		return this.stats.points.onePointIn + this.stats.points.onePointOut;
	},
	'percentage1PointShoots': function() {
		return Math.floor(this.stats.points.onePointIn / (this.stats.points.onePointIn + this.stats.points.onePointOut) * 100) || 0;
	},
	'totalRebounds': function() {
		return this.stats.rebounds.offReb + this.stats.rebounds.defReb;
	},
	'provokedFouls': function() {
		return this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls;
	},
	'foulsRatio': function() {
		return this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls - this.stats.fouls.totalFouls;
	},
	'yourClubFoulsRatio': function() {
		return this.stats.yourClub.fouls.provFouls.offFouls + this.stats.yourClub.fouls.provFouls.defFouls - this.stats.yourClub.fouls.totalFouls;
	},
	'yourClubTotal2PointsShoots': function() {
		return this.stats.yourClub.points.twoPointsIn + this.stats.yourClub.points.twoPointsOut;
	},
	'yourClubPercentage2PointsShoots': function() {
		return Math.floor(this.stats.yourClub.points.twoPointsIn / (this.stats.yourClub.points.twoPointsIn + this.stats.yourClub.points.twoPointsOut) * 100) || 0;
	},
	'yourClubTotal3PointsShoots': function() {
		return this.stats.yourClub.points.threePointsIn + this.stats.yourClub.points.threePointsOut;
	},
	'yourClubPercentage3PointsShoots': function() {
		return Math.floor(this.stats.yourClub.points.threePointsIn / (this.stats.yourClub.points.threePointsIn + this.stats.yourClub.points.threePointsOut) * 100) || 0;
	},
	'yourClubTotal1PointShoots': function() {
		return this.stats.yourClub.points.onePointIn + this.stats.yourClub.points.onePointOut;
	},
	'yourClubPercentage1PointShoots': function() {
		return Math.floor(this.stats.yourClub.points.onePointIn / (this.stats.yourClub.points.onePointIn + this.stats.yourClub.points.onePointOut) * 100) || 0;
	},
	'yourClubTotalRebounds': function() {
		return this.stats.yourClub.rebounds.offReb + this.stats.yourClub.rebounds.defReb;
	},
	'yourClubProvokedFouls': function() {
		return this.stats.yourClub.fouls.provFouls.offFouls + this.stats.yourClub.fouls.provFouls.defFouls;
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
					case "oT1":
						quarterPower = 45;
						break;
					case "oT2":
						quarterPower = 50;
						break;
					case "oT3":
						quarterPower = 55;
						break;
					case "oT4":
						quarterPower = 60;
						break;
					case "oT5":
						quarterPower = 65;
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
					case "oT1":
						quarterPower = 45;
						break;
					case "oT2":
						quarterPower = 50;
						break;
					case "oT3":
						quarterPower = 55;
						break;
					case "oT4":
						quarterPower = 60;
						break;
					case "oT5":
						quarterPower = 65;
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
	var chart = c3.generate({
		size: {
			height: 240
		},
		bindto: this.find('#gameGapChart'),
		data: {
			xs: {
				'Ecart du match': 'x'
			},
			columns: [
				['Ecart du match']
			],
			axes: {
				'Ecart du match': 'y2'
			}
		},
		axis: {
			x: {
				show: false
			},
			y: {
				show: false
			},
			y2: {
				show: true
			}
		},
		tooltip: {
			format: {
				title: function(x) {
					return 'Ecart du match';
				}
			}
		}
	});

	this.autorun(function(tracker) {
		var gameData = Games.find({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1
			}
		}).fetch();
		var xArray = ['x'];
		var yArray = ['Ecart du match'];
		for (var i = 0; i < gameData[0].stats.evolution.length; i++) {
			xArray.push(gameData[0].stats.evolution[i][0]);
			yArray.push(gameData[0].stats.evolution[i][1]);
		}
		chart.load({
			columns: [
				xArray,
				yArray, []
			]
		});
	});
};
