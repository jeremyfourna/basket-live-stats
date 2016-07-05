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
		for (var i = 0; i < 2; i++) {
			var opponentCoach = {
				gameId: gameId,
				teamId: 'opponent',
				firstName: '',
				lastName: '',
				primaryCoach: false,
				techFouls: 0
			};
			if (i === 0) {
				opponentCoach.primaryCoach = true;
			}
			var opponentCoachId = Coachs.insert(opponentCoach);
			coachsId.push(opponentCoachId);
		}
		return {
			ids: coachsId
		};
	}
});
