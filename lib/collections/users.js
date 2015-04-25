Meteor.methods({
	changeUserName: function(user) {
		Meteor.users.update({
			_id: user.id
		}, {
			$set: {
				username: user.pseudo
			}
		});
	},
	deleteUser: function(userId) {
		Meteor.users.remove(userId);
	},
	updateUserProfile: function(user) {
		Meteor.users.update({
			_id: user.id
		}, {
			$set: {
				'profile.name': user.name,
				'profile.firstName': user.firstName,
				'emails.0.address': user.email
			}
		});
	},
	beClubAdmin: function(userId) {
		Meteor.users.update({
			_id: userId
		}, {
			$set: {
				'profile.clubAdmin': true
			}
		});
	}
});
