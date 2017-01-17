import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Users } from './schema.js';

Meteor.methods({
	'Users.changeUserName': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			pseudo: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Users.update({ _id: data.userId }, {
			$set: {
				username: data.pseudo
			}
		});
	},
	'Users.renderUserInactive': (userId) => {
		// Check method params
		check(userId, String);
		// If OK the code continue
		return Users.update({ _id: userId }, {
			$set: {
				'profile.status': 'inactive'
			}
		});
	},
	'Users.updateUserProfile': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			name: { type: String },
			firstName: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Users.update({ _id: data.userId }, {
			$set: {
				'profile.name': user.name,
				'profile.firstName': user.firstName
			}
		});
	},
	'Users.becomeClubAdmin': (data) => {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			clubId: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Users.update({ _id: data.userId }, {
			$set: {
				'profile.clubAdmin': true,
				'profile.clubId': data.clubId
			}
		});
	}
});
