import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';
import R from 'ramda';

import './stateOfTheGame.jade';

Template.stateOfTheGame.helpers({
	notStarted() {
		return R.equals(this.gameState, 'notStarted');
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

function changeState(gameNewStatus, templateInstance) {
	const data = {
		gameId: R.path(['data', 'gameId'], templateInstance),
		status: gameNewStatus
	};
	return Meteor.call('Games.switchGameState', data, (error) => {
		if (error) {
			return Bert.alert(error.message, 'danger', 'growl-top-right');
		}
	});
}

Template.stateOfTheGame.events({
	'click #notStarted': (event) => {
		event.preventDefault();
		return changeState('q1Running', Template.instance());
	},
	'click #q1Running': function(event) {
		event.preventDefault();
		return changeState('q1Ended', Template.instance());
	},
	'click #q1Ended': function(event) {
		event.preventDefault();
		return changeState('q2Running', Template.instance());
	},
	'click #q2Running': function(event) {
		event.preventDefault();
		return changeState('halfTime', Template.instance());
	},
	'click #halfTime': function(event) {
		event.preventDefault();
		return changeState('q3Running', Template.instance());
	},
	'click #q3Running': function(event) {
		event.preventDefault();
		return changeState('q3Ended', Template.instance());
	},
	'click #q3Ended': function(event) {
		event.preventDefault();
		return changeState('q4Running', Template.instance());
	},
	'click #oT': function(event) {
		event.preventDefault();
		return changeState('oT1', Template.instance());
	},
	'click #oT1': function(event) {
		event.preventDefault();
		return changeState('oT2', Template.instance());
	},
	'click #oT2': function(event) {
		event.preventDefault();
		return changeState('oT3', Template.instance());
	},
	'click #oT3': function(event) {
		event.preventDefault();
		return changeState('oT4', Template.instance());
	},
	'click #oT4': function(event) {
		event.preventDefault();
		return changeState('oT5', Template.instance());
	},
	'click #endedGames': function(event) {
		event.preventDefault();
		console.log("Need to refactor this function");
		const data = {
			gameId: this.gameId,
			status: 'gameEnded'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			} else {
				return Meteor.call('Players.endedGamePlayers', data.gameId, (error, result) => {
					if (error) {
						return Bert.alert(error.message, 'danger', 'growl-top-right');
					}
				});
			}
		});
	}
});
