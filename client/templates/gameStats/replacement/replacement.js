Template.replacement.helpers({
	'homeTeamPlayersPlaying': function() {
		var team = this.homeTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		return inPlayTeam;
	},
	'homeTeamPlayersOnTheBench': function() {
		var team = this.homeTeam.players;
		var oneTheBenchTeam = [];
		team.forEach(function(element, index, array) {
			if (!element.inPlay) {
				oneTheBenchTeam.push(element);
			}
		});
		return oneTheBenchTeam;
	},
	'awayTeamPlayersPlaying': function() {
		var team = this.awayTeam.players;
		var inPlayTeam = [];
		team.forEach(function(element, index, array) {
			if (element.inPlay) {
				inPlayTeam.push(element);
			}
		});
		return inPlayTeam;
	},
	'awayTeamPlayersOnTheBench': function() {
		var team = this.awayTeam.players;
		var oneTheBenchTeam = [];
		team.forEach(function(element, index, array) {
			if (!element.inPlay) {
				oneTheBenchTeam.push(element);
			}
		});
		return oneTheBenchTeam;
	}
});

Template.replacement.events({
	'click #homeTeamInPlay > .homeTeamPillForModal': function(e, t) {
		var gameId = {
			_id: Template.currentData()._id
		};
		var playerData = {
			team: 'homeTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML)
		};
		Meteor.call('goingOnTheBench', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #homeTeamOnTheBench > .homeTeamPillForModal': function(e, t) {
		var gameId = {
			_id: Template.currentData()._id
		};
		var playerData = {
			team: 'homeTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML)
		};
		Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #awayTeamInPlay > .awayTeamPillForModal': function(e, t) {
		var gameId = {
			_id: Template.currentData()._id
		};
		var playerData = {
			team: 'awayTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML)
		};
		Meteor.call('goingOnTheBench', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #awayTeamOnTheBench > .awayTeamPillForModal': function(e, t) {
		var gameId = {
			_id: Template.currentData()._id
		};
		var playerData = {
			team: 'awayTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML)
		};
		Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
