Clubs = new Mongo.Collection('clubs');

Meteor.methods({
	clubInsert: function(clubInfos) {
		var club = {

		};
		var clubId = Clubs.insert(game);
		return {
			_id: clubId
		};
	}
});
