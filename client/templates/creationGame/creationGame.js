Template.creationGame.events({
	'click button': function() {
		var teamDef = function(team) {
			var list = [];
			for (var i = 0; i < 12; i++) {
				var j = i + 4;
				list.push({
					playerIndex: i,
					firstName: null,
					lastName: null,
					jersey: j,
					team: team
				});
			}
			return list;
		};
		var coachDef = function(team) {
			var list = [];
			for (var i = 0; i < 2; i++) {
				list.push({
					coachIndex: i,
					firstName: null,
					lastName: null,
					team: team
				});
			}
			return list;
		};
		var game = {
			gameInfos: {
				homeTeam: null,
				awayTeam: null,
				category: null,
				level: null,
				group: null
			},
			homeTeam: {
				players: teamDef("homeTeam"),
				coachs: coachDef("homeTeam")
			},
			awayTeam: {
				players: teamDef("awayTeam"),
				coachs: coachDef("awayTeam")
			}
		};

		Meteor.call('gameInsert', game, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('updateGameConfiguration', {
				_id: result._id
			});
		});
	}
});
