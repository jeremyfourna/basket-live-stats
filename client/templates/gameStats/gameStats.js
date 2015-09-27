Template.gameStats.helpers({
	'isOwnerOfTheGame': function() {
		var gameAuthor = Games.findOne(Router.current().params._id);
		if (Meteor.userId() === gameAuthor.userId) {
			return true;
		} else {
			return false;
		}
	}
});
