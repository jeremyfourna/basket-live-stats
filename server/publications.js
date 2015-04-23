Meteor.publish('games', function() {
	return Games.find();
});

Meteor.publish('clubs', function() {
	return Clubs.find();
});

Meteor.publish("userData", function() {
	if (this.userId) {
		return Meteor.users.find({
			_id: this.userId
		}, {
			fields: {
				'profile': 1,
				'club': 1
			}
		});
	} else {
		this.ready();
	}
});
