Template.gameStats.helpers({
	'isOwnerOfTheGame': function() {
		if (Meteor.userId() === Template.currentData().userId) {
			return true;
		} else {
			return false;
		}
	}
});
