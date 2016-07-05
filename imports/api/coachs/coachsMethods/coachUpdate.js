Meteor.methods({
	coachUpdate: function(coachData) {
		Coachs.update({
			_id: coachData.coachId
		}, {
			$set: {
				firstName: coachData.firstName,
				lastName: coachData.lastName
			}
		});
	}
});
