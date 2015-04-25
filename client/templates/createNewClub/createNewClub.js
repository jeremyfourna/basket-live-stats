Template.createNewClub.rendered = function() {
	$('.jerseyClubColor').colorpicker();
};

Template.createNewClub.helpers({
	regions: function() {
		return FederationConfig.find({
			def: "region"
		});
	},
	departments: function() {
		return FederationConfig.find({
			def: "department"
		});
	}
});

Template.createNewClub.events({
	'click #validateClubCreation': function(e) {
		e.preventDefault();
		var clubInfos = {
			name: $('#clubName').val(),
			region: $('#region').val(),
			department: $('#department').val(),
			postalCode: $('#postalCode').val(),
			city: $('#city').val(),
			jerseyColor: $('#jerseyClubColor').val(),
			createdBy: Meteor.userId()
		};
		Meteor.call('clubInsert', clubInfos, function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
		Meteor.call('beClubAdmin', Meteor.userId(), function(error, result) {
			if (error) {
				return throwError(error.message);
			}
		});
		Router.go('myClub');
	}
});
