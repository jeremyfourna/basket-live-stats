import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import R from 'ramda';
import 'meteor/sacha:spin';

import { Teams } from '../../../api/teams/schema.js';
import { Players } from '../../../api/players/schema.js';

import './summary.jade';
import '../scoreGapChart/scoreGapChart.js';

Template.summary.onCreated(function() {
	this.autorun(() => {
		const gameId = this.data.gameData._id;

		this.subscribe('teamsForAGame', gameId);
		this.subscribe('playersForAGame', gameId);
	});
});

Template.summary.helpers({
	yourClub() {
		return this.gameData.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.opponent || TAPi18n.__('awayTeam');
	},
	evolution() {
		return this.gameData.evolution;
	},
	yourClubScore() {
		const teamId = this.gameData.yourClubTeamId;

		return Teams.findOne({
			_id: teamId,
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	opponentScore() {
		const teamId = this.gameData.opponentTeamId;

		return Teams.findOne({
			_id: teamId,
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	yourClubStats() {
		const teamId = this.gameData.yourClubTeamId;

		return Teams.findOne({
			_id: teamId,
		});
	},
	opponentStats() {
		const teamId = this.gameData.opponentTeamId;

		return Teams.findOne({
			_id: teamId,
		});
	},
	yourClubPlayers() {
		const gameId = this.gameData._id;
		const teamId = this.gameData.yourClubTeamId;

		return Players.find({
			gameId,
			teamId
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	opponentPlayers() {
		const gameId = this.gameData._id;
		const teamId = this.gameData.opponentTeamId;

		return Players.find({
			gameId,
			teamId
		}, {
			sort: {
				jersey: 1
			}
		}).fetch();
	},
	notStarted() {
		return R.equals(this.gameData.gameState, 'notStarted');
	},
	q1Running() {
		return R.equals(this.gameData.gameState, 'q1Running');
	},
	q1Ended() {
		return R.equals(this.gameData.gameState, 'q1Ended');
	},
	q2Running() {
		return R.equals(this.gameData.gameState, 'q2Running');
	},
	halfTime() {
		return R.equals(this.gameData.gameState, 'halfTime');
	},
	q3Running() {
		return R.equals(this.gameData.gameState, 'q3Running');
	},
	q3Ended() {
		return R.equals(this.gameData.gameState, 'q3Ended');
	},
	q4Running() {
		return R.equals(this.gameData.gameState, 'q4Running');
	},
	gameEnded() {
		return R.equals(this.gameData.gameState, 'gameEnded');
	},
	oT1() {
		return R.equals(this.gameData.gameState, 'oT1');
	},
	oT2() {
		return R.equals(this.gameData.gameState, 'oT2');
	},
	oT3() {
		return R.equals(this.gameData.gameState, 'oT3');
	},
	oT4() {
		return R.equals(this.gameData.gameState, 'oT4');
	},
	oT5() {
		return R.equals(this.gameData.gameState, 'oT5');
	},
	total2PointsShoots() {
		return this.points.twoPointsIn + this.points.twoPointsOut;
	},
	percentage2PointsShoots() {
		return Math.floor(this.points.twoPointsIn / (this.points.twoPointsIn + this.points.twoPointsOut) * 100) || 0;
	},
	total3PointsShoots() {
		return this.points.threePointsIn + this.points.threePointsOut;
	},
	percentage3PointsShoots() {
		return Math.floor(this.points.threePointsIn / (this.points.threePointsIn + this.points.threePointsOut) * 100) || 0;
	},
	total1PointShoots() {
		return this.points.onePointIn + this.points.onePointOut;
	},
	percentage1PointShoots() {
		return Math.floor(this.points.onePointIn / (this.points.onePointIn + this.points.onePointOut) * 100) || 0;
	},
	totalRebounds() {
		return this.offReb + this.defReb;
	},
	provokedFouls() {
		return this.fouls.provOffFouls + this.fouls.provDefFouls;
	},
	foulsRatio() {
		return this.fouls.provOffFouls + this.fouls.provDefFouls - this.fouls.totalFouls;
	},
	teamFoulsRatio() {
		return this.fouls.provOffFouls + this.fouls.provDefFouls - this.fouls.totalFouls;
	},
	teamTotal2PointsShoots() {
		return this.points.twoPointsIn + this.points.twoPointsOut;
	},
	teamPercentage2PointsShoots() {
		return Math.floor(this.points.twoPointsIn / (this.points.twoPointsIn + this.points.twoPointsOut) * 100) || 0;
	},
	teamTotal3PointsShoots() {
		return this.points.threePointsIn + this.points.threePointsOut;
	},
	teamPercentage3PointsShoots() {
		return Math.floor(this.points.threePointsIn / (this.points.threePointsIn + this.points.threePointsOut) * 100) || 0;
	},
	teamTotal1PointShoots() {
		return this.points.onePointIn + this.points.onePointOut;
	},
	teamPercentage1PointShoots() {
		return Math.floor(this.points.onePointIn / (this.points.onePointIn + this.points.onePointOut) * 100) || 0;
	},
	teamTotalRebounds() {
		return this.offReb + this.defReb;
	},
	teamProvokedFouls() {
		return this.fouls.provOffFouls + this.fouls.provDefFouls;
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
				if (this.gameTime[i].state === 'notStarted' || this.gameTime[i].state === 'q1Running' || this.gameTime[i].state === 'q1Ended') {
					quarterPower = 10;
				} else if (this.gameTime[i].state === 'q2Running' || this.gameTime[i].state === 'halfTime') {
					quarterPower = 20;
				} else if (this.gameTime[i].state === 'q3Running' || this.gameTime[i].state === 'q3Ended') {
					quarterPower = 30;
				} else if (this.gameTime[i].state === 'q4Running' || this.gameTime[i].state === 'gameEnded') {
					quarterPower = 40;
				} else if (this.gameTime[i].state === 'oT1') {
					quarterPower = 45;
				} else if (this.gameTime[i].state === 'oT2') {
					quarterPower = 50;
				} else if (this.gameTime[i].state === 'oT3') {
					quarterPower = 55;
				} else if (this.gameTime[i].state === 'oT4') {
					quarterPower = 60;
				} else if (this.gameTime[i].state === 'oT5') {
					quarterPower = 65;
				} else {
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
				if (this.gameTime[i].state === 'notStarted' || this.gameTime[i].state === 'q1Running' || this.gameTime[i].state === 'q1Ended') {
					quarterPower = 10;
				} else if (this.gameTime[i].state === 'q2Running' || this.gameTime[i].state === 'halfTime') {
					quarterPower = 20;
				} else if (this.gameTime[i].state === 'q3Running' || this.gameTime[i].state === 'q3Ended') {
					quarterPower = 30;
				} else if (this.gameTime[i].state === 'q4Running' || this.gameTime[i].state === 'gameEnded') {
					quarterPower = 40;
				} else if (this.gameTime[i].state === 'oT1') {
					quarterPower = 45;
				} else if (this.gameTime[i].state === 'oT2') {
					quarterPower = 50;
				} else if (this.gameTime[i].state === 'oT3') {
					quarterPower = 55;
				} else if (this.gameTime[i].state === 'oT4') {
					quarterPower = 60;
				} else if (this.gameTime[i].state === 'oT5') {
					quarterPower = 65;
				} else {
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
