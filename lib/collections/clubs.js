Clubs = new Mongo.Collection('clubs');

Clubs.allow({
	insert: function(userId, doc) {
		// the user must be logged in, and the document must be owned by the user
		return (userId && doc.createdBy === userId);
	},
	update: function(userId, doc, fields, modifier) {
		// can only change your own documents
		return doc.createdBy === userId;
	},
	remove: function(userId, doc) {
		// can only remove your own documents
		return doc.createdBy === userId;
	},
	fetch: ['createdBy']
});

Clubs.deny({
	update: function(userId, docs, fields, modifier) {
		// can't change author
		return _.contains(fields, 'createdBy');
	}
});

Meteor.methods({
	clubInsert: function(clubInfos) {
		var clubId = Clubs.insert(clubInfos);
		return {
			_id: clubId
		};
	},
	createNewTeam: function(team, club) {
		Clubs.update({
			_id: club
		}, {
			$push: {
				teams: team
			}
		});
	},
	deleteTeam: function(teamToDelete) {
		Clubs.update({
			_id: teamToDelete.club
		}, {
			$pull: {
				teams: {
					teamId: teamToDelete.team
				}
			}
		});
	}
});
