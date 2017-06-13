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
		const data = {
			gameId: this.gameId,
			status: 'q1Ended'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #q1Ended': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'q2Running'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #q2Running': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'halfTime'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #halfTime': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'q3Running'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #q3Running': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'q3Ended'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #q3Ended': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'q4Running'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #oT': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'oT1'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #oT1': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'oT2'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #oT2': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'oT3'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #oT3': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'oT4'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #oT4': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'oT5'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
	},
	'click #endedGames': function(event) {
		event.preventDefault();
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
