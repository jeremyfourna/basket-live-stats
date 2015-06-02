Template.replacement.events({
	'click .validateInPlayPlayers': function() {
		$('#homeTeamInPlay .homeTeamPillForModal').each(function() {
			console.log(this);
		});
	},

});

Template.replacement.onRendered(function() {
	//dragula(this.find('#homeTeamOnTheBench'));
	dragula([this.find('#homeTeamInPlay'), this.find('#homeTeamOnTheBench')]).on('drop', function(el, container, source) {
		var gameId = {
			_id: Session.get('gameId')
		};
		var playerData = {
			playerIndex: Number(el.firstElementChild.firstElementChild.firstChild.data),
			team: 'homeTeam'
		};
		Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	});
	dragula([this.find('#awayTeamInPlay'), this.find('#awayTeamOnTheBench')]).on('drop', function(el, container, source) {
		var gameId = {
			_id: Session.get('gameId')
		};
		var playerData = {
			playerIndex: Number(el.firstElementChild.firstElementChild.firstChild.data),
			team: 'awayTeam'
		};
		Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	});
	Session.set('gameId', Template.currentData()._id);
});
