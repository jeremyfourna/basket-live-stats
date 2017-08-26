Template.teamEdition.helpers({
	team: function() {
		var data = this.teams;
		var teamToDisplay = {};
		data.forEach(function(element) {
			if (element.teamId === Session.get('teamToEdit')) {
				teamToDisplay = element;
			}
		});
		return teamToDisplay;
	}
});

Template.teamEdition.events({
	'click .addPlayer': function(e, t) {
		return Blaze.render(Template.teamPlayerDefinition, t.$('.playerData').get(0));
	},
	'click .addCoach': function(e, t) {
		return Blaze.render(Template.teamCoachDefinition, t.$('.coachData').get(0));
	},
	'click .updateTeam': function() {
		var isFilled = function(element) {
			if ($(element).val() === '') {
				return null;
			} else {
				return $(element).val();
			}
		};
		var team = {
			players: [],
			coachs: [],
			teamName: $('#teamName').val(),
			level: $('#level').val(),
			group: $('#group').val(),
			teamId: Session.get('teamToEdit')
		};
		var clubId = this._id;
		var teamId = Session.get('teamToEdit');
		$('.player').each(function(index, element) {
			var player = {
				firstName: isFilled($(element).find('.firstName')),
				lastName: isFilled($(element).find('.lastName')),
				jersey: Number($(element).find('.jersey').val()),
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

		Meteor.call('updateTeam', team, clubId, teamId, function(error) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('myClub');
		});
	}
});