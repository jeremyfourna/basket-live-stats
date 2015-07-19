Games = new Mongo.Collection('games');

Games.allow({
	insert: function(userId, doc) {
		// the user must be logged in, and the document must be owned by the user
		return (userId && doc.userId === userId);
	},
	update: function(userId, doc, fields, modifier) {
		// can only change your own documents
		return doc.userId === userId;
	},
	remove: function(userId, doc) {
		// can only remove your own documents
		return doc.userId === userId;
	},
	fetch: ['userId']
});

Games.deny({
	update: function(userId, docs, fields, modifier) {
		// can't change author
		return _.contains(fields, 'author');
	},
	update: function(userId, docs, fields, modifier) {
		// can't change userId
		return _.contains(fields, 'userId');
	},
	fetch: ['author', 'userId']
});
