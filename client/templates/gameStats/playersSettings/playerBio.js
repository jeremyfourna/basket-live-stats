Template.playerBio.helpers({
	gameData: function() {
		return Games.findOne(Router.current().params._id);
	}
});
