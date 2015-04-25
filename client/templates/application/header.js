Template.header.helpers({
	LBBSAdmin: function() {
		if (Meteor.user().profile.LBBSAdmin) {
			return true;
		} else {
			return false;
		}
	},
	isClubAdmin: function() {
		if (Meteor.user().profile.clubAdmin) {
			return true;
		} else {
			return false;
		}
	}
});
