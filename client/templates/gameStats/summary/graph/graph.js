Template.graph.helpers({});

Template.graph.rendered = function() {
	var gameData = Template.currentData().gameStats.evolution;
	var xArray = ['x'];
	var yArray = ['data1'];
	for (var i = 0; i < gameData.length; i++) {
		xArray.push(gameData[i][0]);
		yArray.push(gameData[i][1]);
	}

	Session.set('x', xArray);
	Session.set('data1', yArray);
	var chart = c3.generate({
		bindto: this.find('#gameGapChart'),
		data: {
			xs: {
				'data1': 'x',
			},
			columns: [
				['data1'],
			]
		},
		axis: {
			x: {
				show: false
			}
		}
	});

	this.autorun(function(tracker) {
		chart.load({
			columns: [
				Session.get('x'),
				Session.get('data1'), []
			]
		});
	});
};
