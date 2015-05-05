Template.newTeamDefinition.events({
	'click .addPlayer': function() {
		return Blaze.render(Template.teamPlayerDefinition, document.getElementsByClassName('playerDefinition'), document.getElementsByClassName('addPlayer'), Template.newTeamDefinition);
	},
	'click .addCoach': function() {
		return Blaze.render(Template.teamCoachDefinition, document.getElementsByClassName('coachDefinition'), document.getElementsByClassName('addCoach'), Template.newTeamDefinition);
	}
});
