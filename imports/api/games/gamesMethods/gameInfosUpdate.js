Meteor.methods({
	gameInfosUpdate: function(gameId, gameInfos) {
		Games.update({
			_id: gameId
		}, {
			$set: {
				'gameInfos.yourClub': gameInfos.yourClub,
				'gameInfos.opponent': gameInfos.opponent,
				'gameInfos.level': gameInfos.level,
				'gameInfos.group': gameInfos.group
			}
		});
	}
});
