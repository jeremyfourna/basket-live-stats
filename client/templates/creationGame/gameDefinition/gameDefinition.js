Template.gameDefinition.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1
			}
		}, {
			sort: {
				name: 1
			}
		});
	},
	'yourClub': function() {
		return Meteor.user().profile.club;
	},
	'level': function() {
		return FederationConfig.find({
			def: 'level'
		}, {
			sort: {
				val: 1
			}
		});
	},
	'group': function() {
		return FederationConfig.find({
			def: 'group'
		}, {
			sort: {
				val: 1
			}
		});
	}
});

Template.gameDefinition.events({
	'click .addPlayer': function(e, t) {
		return Blaze.render(Template.playerDefinition, t.$('.playerData').get(0));
	},
	'click .addCoach': function(e, t) {
		return Blaze.render(Template.coachDefinition, t.$('.coachData').get(0));
	},
	'click .removePlayer': function() {
		if ($('.player').length !== 1) {
			$('.player').get(-1).remove();
		}
	},
	'click .removeCoach': function() {
		if ($('.coach').length !== 1) {
			$('.coach').get(-1).remove();
		}
	},
	'click .configurationValidation': function() {
		if ($('.player').length < 5) {
			return throwError("Your team must have a minimum of 5 players");
		}
		var game = {
			userId: Meteor.userId(),
			privateGame: $('#privateGame').is(':checked'),
			gameInfos: {
				yourClub: $('#yourClub').val(),
				opponent: $('#opponent').val(),
				level: $('#level').val(),
				group: $('#group').val()
			}
		};
		var players = [];
		var coachs = [];
		$('.player').each(function(index, element) {
			var player = {
				teamId: 'yourClub',
				firstName: $(element).find('.firstName').val(),
				lastName: $(element).find('.lastName').val(),
				jersey: $(element).find('.jersey').val()
			};
			players.push(player);
		});
		$('.coach').each(function(index, element) {
			var coach = {
				teamId: 'yourClub',
				firstName: $(element).find('.firstName').val(),
				lastName: $(element).find('.lastName').val(),
				primaryCoach: $(element).find('.primaryCoach').is(':checked')
			};
			coachs.push(coach);
		});
		Meteor.call('gameInsert', game, function(error, result) {
			var gameId;
			var playersId;
			var coachsId;
			if (error) {
				return throwError(error.message);
			} else {
				gameId = result._id;
				Meteor.call('playerInsert', gameId, players, function(error, result) {
					if (error) {
						return throwError(error.message);
					} else {
						playersId = result.ids;
						Meteor.call('coachInsert', gameId, coachs, function(error, result) {
							if (error) {
								return throwError(error.message);
							} else {
								coachsId = result.ids;
								Router.go('gameStats', {
									_id: gameId
								});
							}
						});
					}
				});
			}
		});
	}
});
