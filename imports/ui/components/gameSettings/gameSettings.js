import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import R from 'ramda';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';
import { Coachs } from '../../../api/coachs/schema.js';

import './gameSettings.jade';
import './gameInfos.js';
import './playerUpdate.js';
import './coachUpdate.js';

Template.gameSettings.onCreated(function() {
	this.autorun(() => {
		this.subscribe('Games.oneGameInfos', R.path(['params', '_id'], Router.current()));
		this.subscribe('Players.playersForAGame', R.path(['params', '_id'], Router.current()));
		this.subscribe('Coachs.coachsForAGame', R.path(['params', '_id'], Router.current()));
	});
});

Template.gameSettings.helpers({
	gameData() {
		return Games.findOne({ _id: R.path(['params', '_id'], Router.current()) });
	},
	playerData() {
		return Players.find({
			gameId: R.path(['params', '_id'], Router.current()),
			teamId: R.prop('yourClubTeamId', this)
		});
	},
	coachData() {
		return Coachs.find({
			gameId: R.path(['params', '_id'], Router.current()),
			teamId: R.prop('opponentTeamId', this)
		});
	}
});
