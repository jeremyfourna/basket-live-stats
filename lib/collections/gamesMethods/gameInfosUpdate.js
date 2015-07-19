Meteor.methods({
	gameInfosUpdate: function(gameInfos, gameId) {
		check(gameId, String);
		check(gameInfos, {
			homeTeam: String,
			awayTeam: String,
			level: String,
			group: String,
			privateGame: Boolean
		});
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
