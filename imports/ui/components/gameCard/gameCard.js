import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';
import R from 'ramda';

import { Teams } from '../../../api/teams/schema.js';

import './gameCard.jade';

Template.gameCard.onCreated(function() {
	this.autorun(() => {
		const gameId = this.data._id;

		this.subscribe('Teams.teamsForAGame', gameId);
	});
});

Template.gameCard.helpers({
	yourClub() {
		return this.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.opponent || TAPi18n.__('awayTeam');
	},
	notStarted() {
		return R.equals(this.gameState, 'notStarted');
	},
	yourClubScore() {
		const teamId = this.yourClubTeamId;

		return Teams.findOne({
			_id: teamId
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	opponentScore() {
		const teamId = this.opponentTeamId;

		return Teams.findOne({
			_id: teamId,
		}, {
			fields: {
				score: 1
			}
		}).score;
	},
	q1Running() {
		return R.equals(this.gameState, 'q1Running');
	},
	q1Ended() {
		return R.equals(this.gameState, 'q1Ended');
	},
	q2Running() {
		return R.equals(this.gameState, 'q2Running');
	},
	halfTime() {
		return R.equals(this.gameState, 'halfTime');
	},
	q3Running() {
		return R.equals(this.gameState, 'q3Running');
	},
	q3Ended() {
		return R.equals(this.gameState, 'q3Ended');
	},
	q4Running() {
		return R.equals(this.gameState, 'q4Running');
	},
	gameEnded() {
		return R.equals(this.gameState, 'gameEnded');
	},
	oT1() {
		return R.equals(this.gameState, 'oT1');
	},
	oT2() {
		return R.equals(this.gameState, 'oT2');
	},
	oT3() {
		return R.equals(this.gameState, 'oT3');
	},
	oT4() {
		return R.equals(this.gameState, 'oT4');
	},
	oT5() {
		return R.equals(this.gameState, 'oT5');
	}
});
