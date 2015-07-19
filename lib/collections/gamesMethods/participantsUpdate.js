Meteor.methods({
	participantsUpdate: function(currentGame, homeTeam, awayTeam) {
		for (var i = 0; i < homeTeam.players.length; i++) {
			homeTeam.players[i].inPlay = false;
			homeTeam.players[i].gameTime = [];
			homeTeam.players[i].stats = {
				points: {
					onePointIn: 0,
					totalPoints: 0,
					twoPointsIn: 0,
					threePointsIn: 0,
					onePointOut: 0,
					twoPointsOut: 0,
					threePointsOut: 0
				},
				evaluation: 0,
				assists: 0,
				rebounds: {
					offReb: 0,
					defReb: 0
				},
				turnovers: 0,
				fouls: {
					offFouls: 0,
					totalFouls: 0,
					provFouls: {
						offFouls: 0,
						defFouls: 0
					},
					foul: 0,
					foul1FT: 0,
					foul2FT: 0,
					foul3FT: 0,
					techFoul: 0,
					antiSportFoul: 0,
					disqualifyingFoul: 0
				},
				steals: 0,
				blocks: 0
			};
		}
		for (var j = 0; j < awayTeam.players.length; j++) {
			awayTeam.players[j].inPlay = false;
			awayTeam.players[j].gameTime = [];
			awayTeam.players[j].stats = {
				points: {
					onePointIn: 0,
					totalPoints: 0,
					twoPointsIn: 0,
					threePointsIn: 0,
					onePointOut: 0,
					twoPointsOut: 0,
					threePointsOut: 0
				},
				evaluation: 0,
				assists: 0,
				rebounds: {
					offReb: 0,
					defReb: 0
				},
				turnovers: 0,
				fouls: {
					offFouls: 0,
					totalFouls: 0,
					provFouls: {
						offFouls: 0,
						defFouls: 0
					},
					foul: 0,
					foul1FT: 0,
					foul2FT: 0,
					foul3FT: 0,
					techFoul: 0,
					antiSportFoul: 0,
					disqualifyingFoul: 0
				},
				steals: 0,
				blocks: 0
			};
		}
		Games.update(currentGame, {
			$set: {
				homeTeam: homeTeam,
				awayTeam: awayTeam
			}
		});
	}
});
