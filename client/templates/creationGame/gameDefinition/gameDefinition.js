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
		for (var i = 0, len = $('.player').length; i < len; i++) {
			var player = {
				teamId: 'yourClub',
				firstName: $('.player').get(i).find('.firstName').val(),
				lastName: $('.player').get(i).find('.lastName').val(),
				jersey: $('.player').get(i).find('.jersey').val()
			};
			players.push(player);
		}
		return false;
	}
});
