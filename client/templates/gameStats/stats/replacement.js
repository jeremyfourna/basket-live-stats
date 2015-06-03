Template.replacement.onRendered(function() {
	dragula([this.find('#homeTeamInPlay'), this.find('#homeTeamOnTheBench')]).on('drop', function(el, container, source) {
		var gameId = {
			_id: Session.get('gameId')
		};
		var playerData = {
			playerIndex: Number(el.firstElementChild.firstElementChild.firstChild.data),
			team: 'homeTeam'
		};
		if (container.id === 'homeTeamInPlay') {
			Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else if (container.id === 'homeTeamOnTheBench') {
			Meteor.call('goingOnTheBench', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	});
	dragula([this.find('#awayTeamInPlay'), this.find('#awayTeamOnTheBench')]).on('drop', function(el, container, source) {
		var gameId = {
			_id: Session.get('gameId')
		};
		var playerData = {
			playerIndex: Number(el.firstElementChild.firstElementChild.firstChild.data),
			team: 'awayTeam'
		};
		if (container.id === 'awayTeamInPlay') {
			Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else if (container.id === 'awayTeamOnTheBench') {
			Meteor.call('goingOnTheBench', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	});
	Session.set('gameId', Template.currentData()._id);
});

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
