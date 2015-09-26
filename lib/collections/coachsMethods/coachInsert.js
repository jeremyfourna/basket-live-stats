Meteor.methods({
	coachInsert: function(gameId, coachsData) {
		var coachsId = [];
		coachsData.forEach(function(element) {
			var coach = {
				gameId: gameId,
				teamId: element.teamId,
				firstName: element.firstName,
				lastName: element.lastName,
				primaryCoach: element.primaryCoach,
				techFouls: 0
			};
			var coachId = Coachs.insert(coach);
			coachsId.push(coachId);
		});
		return {
			ids: coachsId
		};
	}
});
