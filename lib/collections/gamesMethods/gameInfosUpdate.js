Meteor.methods({
	gameInfosUpdate: function(gameInfos, gameId) {
		Games.update({
			_id: gameId
		}, {
			$set: {
				"gameInfos.homeTeam": gameInfos.homeTeam,
				"gameInfos.awayTeam": gameInfos.awayTeam,
				"gameInfos.level": gameInfos.level,
				"gameInfos.group": gameInfos.group,
				"privateGame": gameInfos.privateGame
			}
		});
	}
});
