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
	return Math.floor(R.multiply(R.divide(shootsIn, R.add(shootsIn, shootsOut)), 100)) || 0;
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
	playerTime() { // This function need a big refactoring !!!
		// To know if the player is in play or not
		// modulo === 1 means player is in play
		// modulo === 0 the player is on the bench
		const modulo = R.modulo(R.length(R.prop('gameTime', this)), 2);
		const gameTime = R.prop('gameTime', this);
		let playerTimeMinutes = 0;
		let playerTimeSecondes = 0;
		let quarterPower = 0;
		// Conditions for the number of minutes if the player
		// neven went out of the court
		const qPower10 = R.anyPass([
			R.equals('notStarted'),
			R.equals('q1Running'),
			R.equals('q1Ended')
		]);
		const qPower20 = R.anyPass([
			R.equals('q2Running'),
			R.equals('halfTime')
		]);
		const qPower30 = R.anyPass([
			R.equals('q3Running'),
			R.equals('q3Ended')
		]);
		const qPower40 = R.anyPass([
			R.equals('q4Running'),
			R.equals('gameEnded')
		]);
		// Conditional function
		const fnForQPower = R.cond([
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

		if (R.equals(R.length(gameTime), 0)) {
			return '00:00';
		} else if (R.equals(modulo, 0)) {
			const cumulativeTime = R.reduce((prev, cur) => {
				const quarterPower = fnForQPower(R.prop('state', cur));

				if (R.equals(R.prop('way', cur), 'in')) {
					const transformations = {
						min: R.add(R.subtract(R.prop('minutes', cur), quarterPower)),
						sec: R.add(R.prop('secondes', cur))
					};
					return R.evolve(transformations, prev);

				} else if (R.equals(R.prop('way', cur), 'out')) {
					const transformations = {
						min: R.add(R.subtract(quarterPower, R.prop('minutes', cur))),
						sec: R.subtract(R.prop('secondes', cur))
					};
					const newPrev = R.evolve(transformations, prev);

					if (R.lt(playerTimeSecondes, 0)) {
						const transformations = {
							min: R.dec(R.prop('min')),
							sec: R.add(R.prop('sec'), 60)
						};
						return R.evolve(transformations, newPrev);

					} else {
						return newPrev;
					}
				}
			}, { min: 0, sec: 0 }, gameTime);

			if (R.lt(R.prop('sec', cumulativeTime), 10)) {
				playerTimeSecondes = `0${R.prop('sec', cumulativeTime)}`;
			} else {
				playerTimeSecondes = R.prop('sec', cumulativeTime);
			}
			if (R.lt(R.prop('min', cumulativeTime), 10)) {
				playerTimeMinutes = `0${R.prop('min', cumulativeTime)}`;
			} else {
				playerTimeMinutes = R.prop('min', cumulativeTime);
			}

			return `${playerTimeMinutes}:${playerTimeSecondes}`;

		} else if (R.equals(modulo, 1)) {
			const cumulativeTime = R.reduce((prev, cur) => {
				const quarterPower = fnForQPower(R.prop('state', cur));

				if (R.equals(R.prop('way', cur), 'in')) {
					const transformations = {
						min: R.add(R.subtract(R.prop('minutes', cur), quarterPower)),
						sec: R.add(R.prop('secondes', cur))
					};
					return R.evolve(transformations, prev);

				} else if (R.equals(R.prop('way', cur), 'out')) {
					const transformations = {
						min: R.add(R.subtract(quarterPower, R.prop('minutes', cur))),
						sec: R.subtract(R.prop('secondes', cur))
					};
					const newPrev = R.evolve(transformations, prev);

					if (R.lt(playerTimeSecondes, 0)) {
						const transformations = {
							min: R.dec(R.prop('min')),
							sec: R.add(R.prop('sec'), 60)
						};
						return R.evolve(transformations, newPrev);

					} else {
						return newPrev;
					}
				}
			}, { min: 0, sec: 0 }, gameTime);

			const lastElement = R.last(gameTime);
			const transformations = {
				min: R.add(R.prop('minutes', lastElement)),
				sec: R.add(R.prop('secondes', lastElement))
			};
			const newCumulativeTime = R.evolve(transformations, cumulativeTime);

			if (R.lt(R.prop('sec', cumulativeTime), 10)) {
				playerTimeSecondes = `0${R.prop('sec', cumulativeTime)}`;
			} else {
				playerTimeSecondes = R.prop('sec', cumulativeTime);
			}
			if (R.lt(R.prop('min', cumulativeTime), 10)) {
				playerTimeMinutes = `0${R.prop('min', cumulativeTime)}`;
			} else {
				playerTimeMinutes = R.prop('min', cumulativeTime);
			}

			return `${playerTimeMinutes}:${playerTimeSecondes}`;
		}
	}
});
