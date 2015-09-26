Meteor.methods({
	playerInsert: function(gameId, playersData) {
		var playersId = [];
		playersData.forEach(function(element) {
			var player = {
				gameId: gameId,
				teamId: element.teamId,
				firstName: element.firstName,
				lastName: element.lastName,
				jersey: element.jersey,
				inPlay: false,
				gameTime: [],
				stats: {
					points: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0,
						totalPoints: 0
					},
					evaluation: 0,
					assists: 0,
					rebounds: {
						offReb: 0,
						defReb: 0
					},
					fouls: {
						provFouls: {
							offFouls: 0,
							defFouls: 0
						},
						offFouls: 0,
						totalFouls: 0,
						defFouls: 0,
						foul1FT: 0,
						foul2FT: 0,
						foul3FT: 0,
						techFouls: 0,
						antiSportFouls: 0,
						disqualifyingFouls: 0
					},
					steals: 0,
					blocks: 0,
					turnovers: 0
				}
			};
			var playerId = Players.insert(player);
			playersId.push(playerId);
		});
		return {
			ids: playersId
		};
	}
});
