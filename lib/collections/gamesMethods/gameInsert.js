Meteor.methods({
	gameInsert: function(gameData) {
		check(gameData, {
			gameInfos: {
				homeTeam: null,
				awayTeam: null,
				level: null,
				group: null
			},
			homeTeam: {
				players: Array,
				coachs: Array
			},
			awayTeam: {
				players: Array,
				coachs: Array
			}
		});
		var user = Meteor.user();
		var game = {
			userId: user._id,
			author: user.username,
			createdAt: new Date(),
			state: 'notStarted',
			privateGame: false,
			gameInfos: gameData.gameInfos,
			homeTeam: gameData.homeTeam,
			awayTeam: gameData.awayTeam,
			gameStats: {
				score: {
					homeTeam: 0,
					awayTeam: 0
				},
				evolution: [
					[0, 0]
				],
				evaluation: {
					homeTeam: 0,
					awayTeam: 0
				},
				shoots: {
					homeTeam: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					},
					awayTeam: {
						onePointIn: 0,
						onePointOut: 0,
						twoPointsIn: 0,
						twoPointsOut: 0,
						threePointsIn: 0,
						threePointsOut: 0
					}
				},
				assists: {
					homeTeam: 0,
					awayTeam: 0
				},
				rebounds: {
					homeTeam: {
						offReb: 0,
						defReb: 0
					},
					awayTeam: {
						offReb: 0,
						defReb: 0
					}
				},
				fouls: {
					homeTeam: {
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
					awayTeam: {
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
					}
				},
				steals: {
					homeTeam: 0,
					awayTeam: 0
				},
				blocks: {
					homeTeam: 0,
					awayTeam: 0
				},
				turnovers: {
					homeTeam: 0,
					awayTeam: 0
				}
			}
		};
		var gameId = Games.insert(game);
		return {
			_id: gameId
		};
	}
});
