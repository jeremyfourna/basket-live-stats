Coachs = new Mongo.Collection('coachs');

var Schemas = {};

Schemas.Coachs = new SimpleSchema({
	gameId: {
		type: String,
		label: 'Game id'
	},
	teamId: {
		type: String,
		label: 'team id'
	},
	firstName: {
		type: String,
		label: 'Coachs first name',
		optional: true
	},
	lastName: {
		type: String,
		label: 'Coachs last name',
		optional: true
	},
	primaryCoach: {
		type: Boolean,
		label: 'Primary coach or not'
	},
	techFouls: {
		type: Number,
		label: 'Coach tech fouls',
		min: 0,
		max: 2
	}
});

Coachs.attachSchema(Schemas.Coachs);

Coachs.deny({
	update: function(userId, docs, fields, modifier) {
		// can't change gameId
		return _.contains(fields, 'gameId');
	},
	update: function(userId, docs, fields, modifier) {
		// can't change gameId
		return _.contains(fields, 'teamId');
	},
	fetch: ['gameId', 'teamId']
});
