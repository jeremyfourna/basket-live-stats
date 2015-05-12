Template.myClub.helpers({
	nbPlayers: function() {
		return this.players.length;
	},
	nbCoachs: function() {
		return this.coachs.length;
	}
});

Template.myClub.events({
	'click .deleteTeam': function(e, t) {
		var teamToDelete = {
			club: Template.parentData(1)._id,
			team: this.teamId
		};
		Meteor.call('deleteTeam', teamToDelete, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
