Clubs = new Mongo.Collection('clubs');

Meteor.methods({
	clubInsert: function(clubInfos) {
		var clubId = Clubs.insert(clubInfos);
		return {
			_id: clubId
		};
	}
});
