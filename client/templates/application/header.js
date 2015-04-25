Template.header.helpers({
	LBBSAdmin: function() {
		if (Meteor.user().profile.LBBSAdmin) {
			return true;
		} else {
			return false;
		}
	}
});
