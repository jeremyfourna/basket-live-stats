// Publication who send back everything, use it carrefully
Meteor.publish('federationConfig', function() {
	return FederationConfig.find();
});

// Publication who send back only the level of the categories
Meteor.publish('championshipLevel', function() {
	return FederationConfig.find({
		'def': 'level'
	});
});

// Publication who send back only the group of categories
Meteor.publish('championshipGroup', function() {
	return FederationConfig.find({
		'def': 'group'
	});
});
