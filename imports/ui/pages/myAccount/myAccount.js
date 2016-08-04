Template.myAccount.helpers({
	'clubName': function() {
		return Clubs.find({}, {
			fields: {
				name: 1
			}
		});
	},
	'address': function() {
		return this.emails[0].address;
	}
});

Template.myAccount.events({
	'click #loginInfosPseudoValidate': function() {
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
	'click #deleteAccount': function() {
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
	},
	'click #personalInfosValidate': function() {
		var validateEmail = function(mail) {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
				return mail;
			}
			return throwError('Please enter a valid email address.');
		};
		var user = {
			id: Meteor.userId(),
			name: $('#name').val(),
			firstName: $('#firstName').val(),
			email: validateEmail($('#email').val())
		};
		Meteor.call('updateUserProfile', user, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	},
	'click #personalInfosClubValidate': function() {
		var user = {
			userId: Meteor.userId(),
			club: $('#club').val()
		};
		Meteor.call('updateClub', user, function(error) {
			if (error) {
				return throwError(error.message);
			}
		});
	}
});
