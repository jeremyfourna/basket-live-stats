Template.gameInfos.events({
	'click .gameInfosUpdate': function() {
		$('.teamHome').removeAttr('disabled');
		$('.teamAway').removeAttr('disabled');
		$('.level').removeAttr('disabled');
		$('.group').removeAttr('disabled');
		$('.gameInfosValidation').removeClass('disabled');
	},
	'click .gameInfosValidation': function(e) {
		var gameId = Template.parentData(1)._id;
		var gameInfos = {
			homeTeam: $('.teamHome').val(),
			awayTeam: $('.teamAway').val(),
			level: $('.level').val(),
			group: $('.group').val(),
			privateGame: Template.currentData().privateGame
		};
		$('.teamHome').attr('disabled', 'disabled');
		$('.teamAway').attr('disabled', 'disabled');
		$('.level').attr('disabled', 'disabled');
		$('.group').attr('disabled', 'disabled');
		$('.gameInfosValidation').addClass('disabled');
		Meteor.call('gameInfosUpdate', gameInfos, gameId, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
