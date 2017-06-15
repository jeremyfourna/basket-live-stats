export function getTeamScore(teamId) {
	return Teams.findOne({ _id: teamId }, {
		fields: {
			score: 1
		}
	}).score;
}

export function getTeamStats(teamId) {
	return Teams.findOne({
		_id: teamId,
	});
}

export function getPlayersStats(gameId, teamId) {
	return Players.find({
		gameId,
		teamId
	}, {
		sort: {
			jersey: 1
		}
	}).fetch();
}
