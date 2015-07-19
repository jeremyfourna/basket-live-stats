Meteor.methods({
	coachUpdate: function(coachInfo) {
		if (coachInfo.coachIndex === 0) {
			if (coachInfo.team === 'homeTeam') {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'homeTeam.coachs.0.firstName': coachInfo.firstName,
						'homeTeam.coachs.0.lastName': coachInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'awayTeam.coachs.0.firstName': coachInfo.firstName,
						'awayTeam.coachs.0.lastName': coachInfo.lastName
					}
				});
			}
		} else if (coachInfo.coachIndex === 1) {
			if (coachInfo.team === 'homeTeam') {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'homeTeam.coachs.1.firstName': coachInfo.firstName,
						'homeTeam.coachs.1.lastName': coachInfo.lastName
					}
				});
			} else {
				Games.update({
					_id: coachInfo.gameId
				}, {
					$set: {
						'awayTeam.coachs.1.firstName': coachInfo.firstName,
						'awayTeam.coachs.1.lastName': coachInfo.lastName
					}
				});
			}
		}
	}
});
