Clubs = new Mongo.Collection('clubs');

Meteor.methods({
	insert: function(clubInfos) {
		var club = {

		};
		var clubId = Clubs.insert(game);
		return {
			_id: clubId
		};
	}
});
