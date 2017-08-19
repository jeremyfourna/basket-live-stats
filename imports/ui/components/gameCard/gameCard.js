import { Template } from 'meteor/templating';
import 'meteor/sacha:spin';
import R from 'ramda';
import { getTeamScore } from '../utils.js';
import { TAPi18n } from 'meteor/tap:i18n';

import './gameCard.jade';
import '../stateOfTheGameText/stateOfTheGameText.js';

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
		return getTeamScore(R.prop('yourClubTeamId', this));
	},
	opponentScore() {
		return getTeamScore(R.prop('opponentTeamId', this));
	},
	stateOfTheGame() {
		return R.prop('gameState', this);
	}
});