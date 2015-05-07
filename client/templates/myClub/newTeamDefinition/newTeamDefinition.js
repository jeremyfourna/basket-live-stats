Template.newTeamDefinition.helpers({
	category: function() {
		return FederationConfig.find({
			def: "category"
		});
	},
	level: function() {
		return FederationConfig.find({
			def: "level"
		}, {
			sort: {
				val: 1
			}
		});
	},
	group: function() {
		return FederationConfig.find({
			def: "group"
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
	}
});
