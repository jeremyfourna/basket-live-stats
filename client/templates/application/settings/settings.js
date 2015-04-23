Template.settings.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1,
				city: 1
			}
		});
	}
});
