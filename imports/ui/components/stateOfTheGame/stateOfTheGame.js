import { Template } from 'meteor/templating';
import { Bert } from 'meteor/themeteorchef:bert';

import './stateOfTheGame.jade';

Template.stateOfTheGame.helpers({
	notStarted() {
		if (this.gameState === 'notStarted') {
			return true;
		} else {
			return false;
		}
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

Template.stateOfTheGame.events({
	'click #notStarted': function(event) {
		event.preventDefault();
		const data = {
			gameId: this.gameId,
			status: 'q1Running'
		};
		return Meteor.call('Games.switchGameState', data, (error, result) => {
			if (error) {
				return Bert.alert(error.message, 'danger', 'growl-top-right');
			}
		});
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
