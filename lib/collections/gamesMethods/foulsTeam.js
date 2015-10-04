Meteor.methods({
	offProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionOffProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.offFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	defProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": 1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	correctionDefProvFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.provFouls.defFouls": -1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	offFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.offFouls": 1,
				"stats.yourClub.fouls.totalFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionOffFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.offFouls": -1,
				"stats.yourClub.fouls.totalFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.defFouls": 1,
				"stats.yourClub.fouls.totalFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefFoulsTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.defFouls": -1,
				"stats.yourClub.fouls.totalFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defFoulsOneFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul1FT": 1,
				"stats.yourClub.fouls.totalFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefFoulsOneFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul1FT": -1,
				"stats.yourClub.fouls.totalFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defFoulsTwoFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul2FT": 1,
				"stats.yourClub.fouls.totalFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefFoulsTwoFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul2FT": -1,
				"stats.yourClub.fouls.totalFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	},
	defFoulsThreeFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul3FT": 1,
				"stats.yourClub.fouls.totalFouls": 1,
				"stats.yourClub.evaluation": -1
			}
		});
	},
	correctionDefFoulsThreeFTTeamYourClub: function(gameId) {
		Games.update({
			_id: gameId
		}, {
			$inc: {
				"stats.yourClub.fouls.foul3FT": -1,
				"stats.yourClub.fouls.totalFouls": -1,
				"stats.yourClub.evaluation": 1
			}
		});
	}
});
