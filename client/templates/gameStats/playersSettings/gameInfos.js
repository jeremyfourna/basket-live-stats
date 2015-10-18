Template.gameInfos.events({
	'click .gameInfosUpdate': function() {
		$('.teamHome').removeAttr('disabled');
		$('.teamAway').removeAttr('disabled');
		$('.level').removeAttr('disabled');
		$('.group').removeAttr('disabled');
		$('.gameInfosValidation').removeClass('disabled');
	},
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
			} else {
				$('.teamHome').attr('disabled', 'disabled');
				$('.teamAway').attr('disabled', 'disabled');
				$('.level').attr('disabled', 'disabled');
				$('.group').attr('disabled', 'disabled');
				$('.gameInfosValidation').addClass('disabled');
			}
		});
	}
});
