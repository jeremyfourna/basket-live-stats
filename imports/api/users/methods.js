import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
	changeUserName(data) {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			pseudo: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				username: data.pseudo
			}
		});
	},
	renderUserInactive(userId) {
		// Check method params
		check(userId, String);
		// If OK the code continue
		return Meteor.users.update({ _id: userId }, {
			$set: {
				'profile.status': 'inactive'
			}
		});
	},
	updateUserProfile(data) {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			name: { type: String },
			firstName: { type: String },
			email: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.name': data.name,
				'profile.firstName': data.firstName,
				'emails.0.address': data.email
			}
		});
	},
	becomeClubAdmin(data) {
		// Check method params
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			clubId: { type: String }
		});
		check(data, methodSchema);
		// If OK the code continue
		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.clubAdmin': true,
				'profile.clubId': data.clubId
			}
		});
	}
});
