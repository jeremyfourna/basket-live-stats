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
		var switchData = {
			_id: Template.currentData()._id,
			team: 'homeTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML),
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #homeTeamOnTheBench > .homeTeamPillForModal': function(e, t) {
		var switchData = {
			_id: Template.currentData()._id,
			team: 'homeTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML),
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	},
	'click #awayTeamInPlay > .awayTeamPillForModal': function(e, t) {
		var switchData = {
			_id: Template.currentData()._id,
			team: 'awayTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML),
			call: 'goingOnTheBench'
		};
		Session.set('switchData', switchData);
	},
	'click #awayTeamOnTheBench > .awayTeamPillForModal': function(e, t) {
		var switchData = {
			_id: Template.currentData()._id,
			team: 'awayTeam',
			playerIndex: Number(e.currentTarget.firstElementChild.innerHTML),
			call: 'goingInPlay'
		};
		Session.set('switchData', switchData);
	}
});
