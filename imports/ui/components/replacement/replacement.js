import { Template } from 'meteor/templating';
import { Router } from 'meteor/iron:router';
import { Session } from 'meteor/session';

import './replacement.jade';
import './replacementModal.js';
import './playerReplacement.js';

Template.replacement.helpers({
	yourClub() {
		return this.gameData.gameInfos.yourClub || TAPi18n.__('homeTeam');
	},
	opponent() {
		return this.gameData.gameInfos.opponent || TAPi18n.__('awayTeam');
	},
	yourClubPlayersPlaying() {
		return this.homePlayers.filter((cur) => {
			return cur.inPlay === true;
		});
	},
	yourClubPlayersOnTheBench() {
		return this.homePlayers.filter((cur) => {
			return cur.inPlay === false;
		});
	},
	opponentPlayersPlaying() {
		return this.awayPlayers.filter((cur) => {
			return cur.inPlay === true;
		});
	},
	opponentPlayersOnTheBench() {
		return this.awayPlayers.filter((cur) => {
			return cur.inPlay === false;
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
	'click #yourClubOnTheBench .yourClubPillForModal': function(event) {
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
