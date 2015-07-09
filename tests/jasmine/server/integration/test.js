describe('Games', function() {
	beforeEach(function() {
		Games.remove({});
		var games1 = Games.insert({
			name: 'Fluffy',
			species: 'Cat',
			breed: 'Domestic Shorthair',
			dob: new Date('12/19/2003')
		});
	});

	it('starts out with 1 pet', function() {
		var petCount;
		petCount = Games.find().count();
		expect(petCount).toEqual(1);
	});
});
