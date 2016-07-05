// Retreive the state of a game
getGameState = function(gameId) {
	var state = Games.findOne({
		_id: gameId
	}, {
		fields: {
			gameState: 1
		}
	});
	return state.gameState;
};
