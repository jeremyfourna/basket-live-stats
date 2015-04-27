Template.gameDefinition.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1
			}
		});
	}
});

Template.gameDefinition.events({
	'click .next': function() {
		var gameInfo = {
			homeTeam: $('#homeTeam').val(),
			awayTeam: $('#awayTeam').val(),
			category: $('#category').val(),
			level: $('#level').val(),
			group: $('#group').val(),
			privateGame: $('#privateGame').is(':checked')
		};
		var gameId = this._id;
		Meteor.call('gameInfosUpdate', gameInfo, gameId, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
		Router.go('participantsDefinition', {
			_id: this._id
		});
	}
});
