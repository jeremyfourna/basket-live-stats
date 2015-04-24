Template.settings.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1,
				city: 1
			}
		});
	}
});

Template.settings.events({
	"click #loginInfosPseudoValidate": function() {
		var user = {
			pseudo: $('#pseudo').val(),
			id: Meteor.userId()
		};
		Meteor.call('changeUserName', user, function(error) {
			if (error) {
				return throwError(error.message);
			} else {
				Meteor.logout();
				Router.go('home');
			}
		});
	},
	"click #deleteAccount": function() {
		var userId = {
			_id: Meteor.userId()
		};
		Meteor.call('deleteUser', userId, function(error) {
			if (error) {
				return throwError(error.message);
			} else {
				Meteor.logout();
				Router.go('home');
			}
		});
	}
});
