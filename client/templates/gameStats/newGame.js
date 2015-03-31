Session.setDefault('step2Visited', false);

Template.newGame.helpers({
	hasIVisitedStep2: function() {
		return Session.get('step2Visited');
	}
});

Template.newGame.events({
	'click #step1FFBB': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step2Visited', true);
	},
	'click #step1Amical': function() {
		$('#step1').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step2Visited', true);
	},
	'click #step2FFBB': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step3').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step3Visited', true);
	},
	'click #step2Amical': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step3').removeClass('hidden').addClass('show').addClass('visited');
		Session.set('step3Visited', true);
	},
	'click #step2previous': function() {
		$('#step2').removeClass('show').addClass('hidden');
		$('#step1').removeClass('hidden').addClass('show');
	},
	'click #step3previous': function() {
		$('#step3').removeClass('show').addClass('hidden');
		$('#step2').removeClass('hidden').addClass('show');
	}
});
