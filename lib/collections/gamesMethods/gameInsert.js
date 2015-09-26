Meteor.methods({
	gameInsert: function(gameData) {
		var game = {
			userId: gameData.userId,
			createdAt: new Date(),
			gameState: 'notStarted',
			privateGame: gameData.privateGame,
			gameInfos: {
				yourClub: gameData.gameInfos.yourClub,
				opponent: gameData.gameInfos.opponent,
				level: gameData.gameInfos.level,
				group: gameData.gameInfos.group
			},
			stats: {
				yourClub: {
					score: 0,
					evaluation: 0,
					shoots: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
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
				},
				opponent: {
					score: 0,
					evaluation: 0,
					shoots: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
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
				},
				evolution: [
					[0, 0]
				]
			}
		};
		var gameId = Games.insert(game);
		return {
			_id: gameId
		};
	}
});
