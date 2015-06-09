Template.awayTeamReplacementModal.events({
	'click #validateSwitch': function() {
		var data = Session.get('switchData');
		var gameId = {
			_id: data._id
		};
		var playerData = {
			team: data.team,
			playerIndex: data.playerIndex,
			minutes: Number($('#awayTeamMinutes').val()),
			secondes: Number($('#awayTeamSecondes').val()),
			state: data.state
		};
		if (data.call === 'goingInPlay') {
			Meteor.call('goingInPlay', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		} else if (data.call === 'goingOnTheBench') {
			Meteor.call('goingOnTheBench', gameId, playerData, function(error, result) {
				if (error) {
					return throwError(error.message);
				}
			});
		}
	},
	'click #cancelSwitch': function() {
		$('#awayTeamReplacementModal').modal('hide');
	}
});
