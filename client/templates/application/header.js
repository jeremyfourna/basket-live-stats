Template.header.helpers({
	isClubAdmin: function() {
		if (Meteor.user().profile.clubAdmin) {
			return true;
		} else {
			return false;
		}
	}
});
