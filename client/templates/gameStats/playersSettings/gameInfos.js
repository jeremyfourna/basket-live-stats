Template.gameInfos.events({
	'click .gameInfosValidation': function() {
		var gameInfos = {
			yourClub: $('.teamHome').val(),
			opponent: $('.teamAway').val(),
			level: $('.level').val(),
			group: $('.group').val()
		};
		Meteor.call('gameInfosUpdate', Router.current().params._id, gameInfos, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
