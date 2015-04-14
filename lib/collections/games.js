Games = new Mongo.Collection('games');

Meteor.methods({
	gameInsert: function(gameData) {
		var user = Meteor.user();
		var game = {
			userId: user._id,
			author: user.username,
			createdAt: new Date(),
			state: 'notStarted',
			gameInfos: gameData.gameInfos,
			homeTeam: gameData.homeTeam,
			awayTeam: gameData.awayTeam,
			gameStats: {
				score: {
					homeTeam: 0,
					awayTeam: 0,
				}
			}
		};
		var gameId = Games.insert(game);
		return {
			_id: gameId
		};
	}
});
