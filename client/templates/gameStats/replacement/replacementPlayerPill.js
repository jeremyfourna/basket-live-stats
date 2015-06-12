Template.homeTeamPlayerReplacement.helpers({
	'endedGames': function() {
		if (Template.parentData(1).state === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});

Template.awayTeamPlayerReplacement.helpers({
	'endedGames': function() {
		if (Template.parentData(1).state === "gameEnded") {
			return 'disabled';
		} else {
			return false;
		}
	}
});
