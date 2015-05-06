Template.newTeamDefinition.events({
	'click .addPlayer': function(e, t) {
		return Blaze.render(Template.teamPlayerDefinition, t.$('.playerData').get(0));
	},
	'click .addCoach': function(e, t) {
		return Blaze.render(Template.teamCoachDefinition, t.$('.coachData').get(0));
	}
});
