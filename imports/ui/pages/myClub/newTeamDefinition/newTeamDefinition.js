Template.newTeamDefinition.helpers({
	category: function() {
		return FederationConfig.find({
			def: 'category'
		});
	},
	level: function() {
		return FederationConfig.find({
			def: 'level'
		}, {
			sort: {
				val: 1
			}
		});
	},
	group: function() {
		return FederationConfig.find({
			def: 'group'
		}, {
			sort: {
				val: 1
			}
		});
	}
});

Template.newTeamDefinition.events({
	'click .addPlayer': function(e, t) {
		return Blaze.render(Template.teamPlayerDefinition, t.$('.playerData').get(0));
	},
	'click .addCoach': function(e, t) {
		return Blaze.render(Template.teamCoachDefinition, t.$('.coachData').get(0));
	},
	'click .createTeam': function() {
		var filterInt = function(value) {
			if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
				return Number(value);
			return NaN;
		};
		var isFilled = function(element) {
			if ($(element).val() === '') {
				return null;
			} else {
				return $(element).val();
			}
		};
		var generateId = function() {
			return Math.random().toString(36);
		};
		var team = {
			players: [],
			coachs: [],
			teamName: $('#teamName').val(),
			level: $('#level').val(),
			group: $('#group').val(),
			teamId: generateId()
		};
		var clubId = this._id;
		$('.player').each(function(index, element) {
			var player = {
				firstName: isFilled($(element).find('.firstName')),
				lastName: isFilled($(element).find('.lastName')),
				jersey: filterInt($(element).find('.jersey').val()),
				playerIndex: index,
			};
			team.players.push(player);
		});
		$('.coach').each(function(index, element) {
			var coach = {
				firstName: isFilled($(element).find('.firstName')),
				lastName: isFilled($(element).find('.lastName')),
				coachIndex: index,
			};
			team.coachs.push(coach);
		});

		Meteor.call('createNewTeam', team, clubId, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('myClub');
		});
	}
});
