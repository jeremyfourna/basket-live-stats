import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
	changeUserName(data) {
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			pseudo: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				username: data.pseudo
			}
		});
	},
	deleteUser(userId) {
		check(userId, String);
		return Meteor.users.remove({ _id: userId });
	},
	updateEmail(data) {
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			email: { type: String }
		});
		check(data, methodSchema);
		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'emails.0.address': data.email
			}
		});
	},
	updateUserProfile(data) {
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			name: { type: String },
			firstName: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.name': user.name,
				'profile.firstName': user.firstName
			}
		});
	},
	beClubAdmin(data) {
		const methodSchema = new SimpleSchema({
			userId: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.clubAdmin': true
			}
		});
	},
	updateClub(data) {
		const methodSchema = new SimpleSchema({
			userId: { type: String },
			club: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.club': data.club
			}
		});
	}
});
