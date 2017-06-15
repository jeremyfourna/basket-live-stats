import { Template } from 'meteor/templating';
import { TAPi18n } from 'meteor/tap:i18n';
import R from 'ramda';
import 'meteor/sacha:spin';
import { getTeamScore, getTeamStats, getPlayersStats } from '../utils.js';

import './summary.jade';
import '../scoreGapChart/scoreGapChart.js';

Template.summary.onCreated(function() {
	this.autorun(() => {
		const gameId = this.data.gameData._id;

		this.subscribe('teamsForAGame', gameId);
		this.subscribe('playersForAGame', gameId);
	});
});

function getPercentageForShoots(shootsIn, shootsOut) {
	return Math.floor(
		R.divide(
			shootsIn,
			R.multiply(R.add(shootsIn, shootsOut), 100)
		)
	) || 0;
}

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
		return getTeamScore(R.path(['gameData', 'yourClubTeamId'], this));
	},
	opponentScore() {
		return getTeamScore(R.path(['gameData', 'opponentTeamId'], this));
	},
	yourClubStats() {
		return getTeamStats(R.path(['gameData', 'yourClubTeamId'], this));
	},
	opponentStats() {
		return getTeamStats(R.path(['gameData', 'opponentTeamId'], this));
	},
	yourClubPlayers() {
		return getPlayersStats(
			R.path(['gameData', '_id'], this),
			R.path(['gameData', 'yourClubTeamId'], this)
		);
	},
	opponentPlayers() {
		return getPlayersStats(
			R.path(['gameData', '_id'], this),
			R.path(['gameData', 'opponentTeamId'], this)
		);
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
		return R.add(
			R.path(['points', 'twoPointsIn'], this),
			R.path(['points', 'twoPointsOut'], this)
		);
	},
	percentage2PointsShoots() {
		return getPercentageForShoots(
			R.path(['points', 'twoPointsIn'], this),
			R.path(['points', 'twoPointsOut'], this)
		);
	},
	total3PointsShoots() {
		return R.add(
			R.path(['points', 'threePointsIn'], this),
			R.path(['points', 'threePointsOut'], this)
		);
	},
	percentage3PointsShoots() {
		return getPercentageForShoots(
			R.path(['points', 'threePointsIn'], this),
			R.path(['points', 'threePointsOut'], this)
		);
	},
	total1PointShoots() {
		return R.add(
			R.path(['points', 'onePointIn'], this),
			R.path(['points', 'onePointOut'], this)
		);
	},
	percentage1PointShoots() {
		return getPercentageForShoots(
			R.path(['points', 'onePointIn'], this),
			R.path(['points', 'onePointOut'], this)
		);
	},
	totalRebounds() {
		return R.add(
			R.prop('offReb', this),
			R.prop('defReb', this)
		);
	},
	provokedFouls() {
		return R.add(
			R.path(['fouls', 'provOffFouls'], this),
			R.path(['fouls', 'provDefFouls'], this)
		);
	},
	foulsRatio() {
		return R.subtract(
			R.add(
				R.path(['fouls', 'provOffFouls'], this),
				R.path(['fouls', 'provDefFouls'], this)
			),
			R.path(['fouls', 'totalFouls'], this)
		);
	},
	teamFoulsRatio() {
		return R.subtract(
			R.add(
				R.path(['fouls', 'provOffFouls'], this),
				R.path(['fouls', 'provDefFouls'], this)
			),
			R.path(['fouls', 'totalFouls'], this)
		);
	},
	teamTotal2PointsShoots() {
		return R.add(
			R.path(['points', 'twoPointsIn'], this),
			R.path(['points', 'twoPointsOut'], this)
		);
	},
	teamPercentage2PointsShoots() {
		return getPercentageForShoots(
			R.path(['points', 'twoPointsIn'], this),
			R.path(['points', 'twoPointsOut'], this)
		);
	},
	teamTotal3PointsShoots() {
		return R.add(
			R.path(['points', 'threePointsIn'], this),
			R.path(['points', 'threePointsOut'], this)
		);
	},
	teamPercentage3PointsShoots() {
		return getPercentageForShoots(
			R.path(['points', 'threePointsIn'], this),
			R.path(['points', 'threePointsOut'], this)
		);
	},
	teamTotal1PointShoots() {
		return R.add(
			R.path(['points', 'onePointIn'], this),
			R.path(['points', 'onePointOut'], this)
		);
	},
	teamPercentage1PointShoots() {
		return getPercentageForShoots(
			R.path(['points', 'onePointIn'], this),
			R.path(['points', 'onePointOut'], this)
		);
	},
	teamTotalRebounds() {
		return R.add(
			R.prop('offReb', this),
			R.prop('defReb', this)
		);
	},
	teamProvokedFouls() {
		return R.add(
			R.path(['fouls', 'provOffFouls'], this),
			R.path(['fouls', 'provDefFouls'], this)
		);
	},
	isInPlay() {
		if (this.inPlay) {
			return 'inPlay';
		} else {
			return false;
		}
	},
	playerTime() {
		const modulo = R.modulo(R.length(R.prop('gameTime', this)), 2);
		let playerTimeMinutes = 0;
		let playerTimeSecondes = 0;
		let quarterPower = 0;
		if (R.equals(R.length(R.prop('gameTime', this)), 0)) {
			return '00:00';
		} else if (R.equals(modulo, 0)) {
			R.forEach(cur => {
				let qPower10 = R.anyPass([
					R.equals('notStarted'),
					R.equals('q1Running'),
					R.equals('q1Ended')
				]);
				let qPower20 = R.either([
					R.equals('q2Running'),
					R.equals('halfTime')
				]);
				let qPower30 = R.either([
					R.equals('q3Running'),
					R.equals('q3Ended')
				]);
				let qPower40 = R.anyPass([
					R.equals('q4Running'),
					R.equals('gameEnded')
				]);
				let fnForQPower = R.cond([
					[qPower10, R.always(10)],
					[qPower20, R.always(20)],
					[qPower30, R.always(30)],
					[qPower40, R.always(40)],
					[R.equals('oT1'), R.always(45)],
					[R.equals('oT2'), R.always(50)],
					[R.equals('oT3'), R.always(55)],
					[R.equals('oT4'), R.always(60)],
					[R.equals('oT5'), R.always(65)],
					[R.T, R.always(0)]
				]);
				quarterPower = fnForQPower(R.prop('state', cur));

				if (R.equals(R.prop('way', cur), 'in')) {
					playerTimeMinutes += R.prop('minutes', cur);
					playerTimeSecondes += R.prop('secondes', cur);
					playerTimeMinutes -= quarterPower;
				} else if (R.equals(R.prop('way', cur), 'out')) {
					playerTimeMinutes -= R.prop('minutes', cur);
					playerTimeSecondes -= R.prop('secondes', cur);
					playerTimeMinutes += quarterPower;
					if (R.lt(playerTimeSecondes, 0)) {
						playerTimeMinutes -= 1;
						playerTimeSecondes += 60;
					}
				}
			}, R.prop('gameTime', this));
			if (R.lt(playerTimeSecondes, 10)) {
				playerTimeSecondes = '0' + playerTimeSecondes;
			}
			if (R.lt(playerTimeMinutes, 10)) {
				playerTimeMinutes = '0' + playerTimeMinutes;
			}
			return playerTimeMinutes + ':' + playerTimeSecondes;
		} else if (R.equals(modulo, 1)) {
			for (let i = 0; i < this.gameTime.length - 1; i++) {
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
