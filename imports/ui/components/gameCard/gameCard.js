import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';

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
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
	},
	yourClubScore() {
		const teamId = this.yourClubTeamId;

		return Teams.findOne({
			_id: teamId,
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
	}
});
