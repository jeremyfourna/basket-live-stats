import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
	changeUserName(data) {
		let methodSchema = new SimpleSchema({
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
	deleteUser(data) {
		let methodSchema = new SimpleSchema({
			userId: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.remove({ _id: data.userId });
	},
	updateUserProfile(data) {
		let methodSchema = new SimpleSchema({
			userId: { type: String },
			name: { type: String },
			firstName: { type: String },
			email: { type: String }
		});
		check(data, methodSchema);

		return Meteor.users.update({ _id: data.userId }, {
			$set: {
				'profile.name': user.name,
				'profile.firstName': user.firstName,
				'emails.0.address': user.email
			}
		});
	},
	beClubAdmin(data) {
		let methodSchema = new SimpleSchema({
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
		let methodSchema = new SimpleSchema({
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
