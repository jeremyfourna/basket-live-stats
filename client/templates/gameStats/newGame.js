Session.setDefault('step2Visited', false);

Template.newGame.helpers({
	hasIVisitedStep2: function() {
		return Session.get('step2Visited');
	}
});

Template.newGame.events({
	'click #nextStep': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step2Visited', true);
	},
	'click #step1Next': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
	},
	'click #step2Previous': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step1').removeClass('hidden').addClass('show');
	},
	"click .submitGameConfiguration": function() {
		return console.log("Babar");
	}
});
