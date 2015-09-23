var GameCard = BlazeComponent.extendComponent({
	template: function() {
		return 'gameCard';
	},
	gameData: function() {
		var game = Games.findOne({
			'_id': this.data()._id
		});
		console.log(game);
		return game;
	},
	gameState: function() {
		var game = Games.findOne(this.data().id);
		return '{{_ ' + game.gameState + '}}';
	}
}).register('GameCard');
