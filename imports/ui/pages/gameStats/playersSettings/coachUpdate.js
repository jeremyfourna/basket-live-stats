Template.coachUpdate.events({
	'click .coachValidation': function(e) {
		e.preventDefault();
		var coachInfo = {
			lastName: e.target.parentElement[0].value,
			firstName: e.target.parentElement[1].value,
			coachId: this._id
		};
		Meteor.call('coachUpdate', coachInfo, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
