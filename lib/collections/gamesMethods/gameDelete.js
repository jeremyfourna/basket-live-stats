Meteor.methods({
	gameDelete: function(game) {
		check(game, {
			_id: String
		});
		Games.remove({
			_id: game._id
		});
	}
});
