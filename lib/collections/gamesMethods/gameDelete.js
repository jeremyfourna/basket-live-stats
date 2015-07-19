Meteor.methods({
	gameDelete: function(game) {
		Games.remove({
			_id: game.id
		});
	}
});
