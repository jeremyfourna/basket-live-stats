Template.gameDefinition.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1
			}
		});
	},
	'yourClub': function() {
		return Meteor.user().profile.club;
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
			_id: gameId
		});
	}
});
