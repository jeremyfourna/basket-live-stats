Meteor.publish('games', function() {
	return Games.find();
});

Meteor.publish('clubs', function() {
	return Clubs.find();
});

Meteor.publish('federationConfig', function() {
	return FederationConfig.find();
});
