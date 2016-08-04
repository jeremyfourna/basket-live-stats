import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import 'meteor/sacha:spin';

import { Games } from '../../../api/games/schema.js';
import { Players } from '../../../api/players/schema.js';

import './replacement.jade';
import './replacementModal.js';
import './playerReplacement.js';

Template.replacement.onCreated(function() {
	this.autorun(() => {
		this.subscribe('oneGameForReplacement', Router.current().params._id);
		this.subscribe('playersForAGame', Router.current().params._id);
	});
});

Template.replacement.helpers({
	yourClub() {
		if (!this.gameInfos.yourClub) {
			return 'Home team';
		} else {
			return this.gameInfos.yourClub;
		}
	},
	opponent() {
		if (!this.gameInfos.opponent) {
			return 'Away team';
		} else {
			return this.gameInfos.opponent;
		}
	},
	gameData() {
		return Games.findOne({ _id: Router.current().params._id }, {
			fields: {
				gameInfos: 1
			}
		});
	},
	yourClubPlayersPlaying() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	yourClubPlayersOnTheBench() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub',
			inPlay: false
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	opponentPlayersPlaying() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: true
		}, {
			sort: {
				jersey: 1
			}
		});
	},
	opponentPlayersOnTheBench() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'opponent',
			inPlay: false
		}, {
			sort: {
				jersey: 1
			}
		});
	}
});

Template.replacement.events({
	'click #yourClubInPlay .yourClubPillForModal': function(event) {
		let switchData = {
			_id: this._id,
			state: this.gameState,
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #yourClubOnTheBench .yourClubPillForModal': function(event) {;
		let switchData = {
			_id: this._id,
			state: this.gameState,
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	},
	'click #opponentInPlay .opponentPillForModal': function(event) {
		let switchData = {
			_id: this._id,
			state: this.gameState,
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #opponentOnTheBench .opponentPillForModal': function(event) {
		let switchData = {
			_id: this._id,
			state: this.gameState,
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	}
});
