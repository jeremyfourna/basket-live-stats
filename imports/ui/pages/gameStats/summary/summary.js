Template.summary.helpers({
	gameData() {
		return Games.findOne(Router.current().params._id);
	},
	playerDataYourClub() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	playerDataOpponent() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent'
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	notStarted() {
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	q1Running() {
		if (this.gameState === 'q1Running') {
			return true;
		} else {
			return false;
		}
	},
	q1Ended() {
		if (this.gameState === 'q1Ended') {
			return true;
		} else {
			return false;
		}
	},
	q2Running() {
		if (this.gameState === 'q2Running') {
			return true;
		} else {
			return false;
		}
	},
	halfTime() {
		if (this.gameState === 'halfTime') {
			return true;
		} else {
			return false;
		}
	},
	q3Running() {
		if (this.gameState === 'q3Running') {
			return true;
		} else {
			return false;
		}
	},
	q3Ended() {
		if (this.gameState === 'q3Ended') {
			return true;
		} else {
			return false;
		}
	},
	q4Running() {
		if (this.gameState === 'q4Running') {
			return true;
		} else {
			return false;
		}
	},
	gameEnded() {
		if (this.gameState === 'gameEnded') {
			return true;
		} else {
			return false;
		}
	},
	oT1() {
		if (this.gameState === 'oT1') {
			return true;
		} else {
			return false;
		}
	},
	oT2() {
		if (this.gameState === 'oT2') {
			return true;
		} else {
			return false;
		}
	},
	oT3() {
		if (this.gameState === 'oT3') {
			return true;
		} else {
			return false;
		}
	},
	oT4() {
		if (this.gameState === 'oT4') {
			return true;
		} else {
			return false;
		}
	},
	oT5() {
		if (this.gameState === 'oT5') {
			return true;
		} else {
			return false;
		}
	},
	total2PointsShoots() {
		return this.stats.points.twoPointsIn + this.stats.points.twoPointsOut;
	},
	percentage2PointsShoots() {
		return Math.floor(this.stats.points.twoPointsIn / (this.stats.points.twoPointsIn + this.stats.points.twoPointsOut) * 100) || 0;
	},
	total3PointsShoots() {
		return this.stats.points.threePointsIn + this.stats.points.threePointsOut;
	},
	percentage3PointsShoots() {
		return Math.floor(this.stats.points.threePointsIn / (this.stats.points.threePointsIn + this.stats.points.threePointsOut) * 100) || 0;
	},
	total1PointShoots() {
		return this.stats.points.onePointIn + this.stats.points.onePointOut;
	},
	percentage1PointShoots() {
		return Math.floor(this.stats.points.onePointIn / (this.stats.points.onePointIn + this.stats.points.onePointOut) * 100) || 0;
	},
	totalRebounds() {
		return this.stats.rebounds.offReb + this.stats.rebounds.defReb;
	},
	provokedFouls() {
		return this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls;
	},
	foulsRatio() {
		return this.stats.fouls.provFouls.offFouls + this.stats.fouls.provFouls.defFouls - this.stats.fouls.totalFouls;
	},
	yourClubFoulsRatio() {
		return this.stats.yourClub.fouls.provFouls.offFouls + this.stats.yourClub.fouls.provFouls.defFouls - this.stats.yourClub.fouls.totalFouls;
	},
	yourClubTotal2PointsShoots() {
		return this.stats.yourClub.points.twoPointsIn + this.stats.yourClub.points.twoPointsOut;
	},
	yourClubPercentage2PointsShoots() {
		return Math.floor(this.stats.yourClub.points.twoPointsIn / (this.stats.yourClub.points.twoPointsIn + this.stats.yourClub.points.twoPointsOut) * 100) || 0;
	},
	yourClubTotal3PointsShoots() {
		return this.stats.yourClub.points.threePointsIn + this.stats.yourClub.points.threePointsOut;
	},
	yourClubPercentage3PointsShoots() {
		return Math.floor(this.stats.yourClub.points.threePointsIn / (this.stats.yourClub.points.threePointsIn + this.stats.yourClub.points.threePointsOut) * 100) || 0;
	},
	yourClubTotal1PointShoots() {
		return this.stats.yourClub.points.onePointIn + this.stats.yourClub.points.onePointOut;
	},
	yourClubPercentage1PointShoots() {
		return Math.floor(this.stats.yourClub.points.onePointIn / (this.stats.yourClub.points.onePointIn + this.stats.yourClub.points.onePointOut) * 100) || 0;
	},
	yourClubTotalRebounds() {
		return this.stats.yourClub.rebounds.offReb + this.stats.yourClub.rebounds.defReb;
	},
	yourClubProvokedFouls() {
		return this.stats.yourClub.fouls.provFouls.offFouls + this.stats.yourClub.fouls.provFouls.defFouls;
	},
	isInPlay() {
		if (this.inPlay) {
			return 'inPlay';
		} else {
			return false;
		}
	},
	playerTime() {
		let playerTimeMinutes = 0;
		let playerTimeSecondes = 0;
		let modulo = this.gameTime.length % 2;
		let i = 0;
		let quarterPower = 0;
		if (this.gameTime.length === 0) {
			return '00:00';
		} else if (modulo === 0) {
			for (i = 0; i < this.gameTime.length; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case 'notStarted':
						quarterPower = 10;
						break;
					case 'q1Running':
						quarterPower = 10;
						break;
					case 'q1Ended':
						quarterPower = 10;
						break;
					case 'q2Running':
						quarterPower = 20;
						break;
					case 'halfTime':
						quarterPower = 20;
						break;
					case 'q3Running':
						quarterPower = 30;
						break;
					case 'q3Ended':
						quarterPower = 30;
						break;
					case 'q4Running':
						quarterPower = 40;
						break;
					case 'gameEnded':
						quarterPower = 40;
						break;
					case 'oT1':
						quarterPower = 45;
						break;
					case 'oT2':
						quarterPower = 50;
						break;
					case 'oT3':
						quarterPower = 55;
						break;
					case 'oT4':
						quarterPower = 60;
						break;
					case 'oT5':
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
			return playerTimeMinutes + ':' + playerTimeSecondes;
		} else if (modulo === 1) {
			for (i = 0; i < this.gameTime.length - 1; i++) {
				quarterPower = 0;
				switch (this.gameTime[i].state) {
					case 'notStarted':
						quarterPower = 10;
						break;
					case 'q1Running':
						quarterPower = 10;
						break;
					case 'q1Ended':
						quarterPower = 10;
						break;
					case 'q2Running':
						quarterPower = 20;
						break;
					case 'halfTime':
						quarterPower = 20;
						break;
					case 'q3Running':
						quarterPower = 30;
						break;
					case 'q3Ended':
						quarterPower = 30;
						break;
					case 'q4Running':
						quarterPower = 40;
						break;
					case 'gameEnded':
						quarterPower = 40;
						break;
					case 'oT1':
						quarterPower = 45;
						break;
					case 'oT2':
						quarterPower = 50;
						break;
					case 'oT3':
						quarterPower = 55;
						break;
					case 'oT4':
						quarterPower = 60;
						break;
					case 'oT5':
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
			return playerTimeMinutes + ':' + playerTimeSecondes;
		}
	}
});


Template.summary.onRendered(function() {
	let chart = c3.generate({
		size: {
			height: 240
		},
		bindto: this.find('#gameGapChart'),
		padding: {
			right: 30
		},
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
				title(x) {
					return 'Ecart du match';
				}
			}
		}
	});

	this.autorun(function(tracker) {
		let gameData = Games.find({
			_id: Router.current().params._id
		}, {
			fields: {
				'stats.evolution': 1
			}
		}).fetch();
		let xArray = ['x'];
		let yArray = ['Ecart du match'];
		for (let i = 0; i < gameData[0].stats.evolution.length; i++) {
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
});
