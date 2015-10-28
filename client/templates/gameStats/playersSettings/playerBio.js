Template.playerBio.helpers({
	gameData: function() {
		return Games.findOne(Router.current().params._id);
	},
	playerData: function() {
		return Players.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		});
	},
	coachData: function() {
		return Coachs.find({
			gameId: Router.current().params._id,
			teamId: 'yourClub'
		});
	}
});
