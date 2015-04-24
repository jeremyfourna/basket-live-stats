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
	}
});
