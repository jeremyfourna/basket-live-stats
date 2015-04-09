Template.home.events({
	'click .newGameCreator': function() {
		var teamDef = function() {
			var list = [];
			for (var i = 0; i < 12; i++) {
				var j = i + 1;
				list.push({
					playerIndex: i,
					firstName: null,
					lastName: null,
					jersey: j
				});
			}
			return list;
		};
		var coachDef = function() {
			var list = [];
			for (var i = 0; i < 2; i++) {
				list.push({
					coachIndex: i,
					firstName: null,
					lastName: null
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
				players: teamDef(),
				coachs: coachDef()
			},
			awayTeam: {
				players: teamDef(),
				coachs: coachDef()
			}
		};

		Meteor.call('gameInsert', game, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
			Router.go('newGame', {
				_id: result._id
			});
		});
	}
});
