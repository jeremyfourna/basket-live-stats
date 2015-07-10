/*
Template.graph.onRendered(function() {
	var data = new ReactiveVar(Template.currentData().gameStats.evolution);
	var dataset = data.get();

	var margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 30
	};
	var width = $('.container').width() - 60;
	var height = 200 - margin.top - margin.bottom;

	var x = d3.scale.linear()
		.range([0, width]);

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis = d3.svg.axis()
		.scale(x)
		.orient("bottom");

	var yAxis = d3.svg.axis()
		.scale(y)
		.orient("left")
		.ticks(5);

	var line = d3.svg.line()
		.x(function(d) {
			return x(d[0]);
		})
		.y(function(d) {
			return y(d[1]);
		});

	var svg = d3.select("#scoreChart").append("svg")
		.attr("width", width)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	x.domain(d3.extent(dataset, function(d) {
		return d[0];
	}));
	y.domain(d3.extent(dataset, function(d) {
		return d[1];
	}));

	svg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", 6)
		.attr("dy", ".71em")
		.style("text-anchor", "end")
		.text("Ecart du match");

	svg.append("path")
		.datum(dataset)
		.attr("class", "line")
		.attr("d", line);
});
*/

Template.graph.helpers({
	graphWidth: function() {
		return $('.container').width();
	}
});

Template.graph.topGenresChart = function() {
	return {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: "Ecart du match"
		},
		plotOptions: {
			line: {
				allowPointSelect: false,
				cursor: 'pointer',
			}
		},
		series: [{
			type: 'line',
			name: 'Ecart du match',
			data: Template.currentData().gameStats.evolution
		}]
	};
};
