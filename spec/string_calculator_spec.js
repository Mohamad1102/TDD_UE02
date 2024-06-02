describe('String Calculator', function() {
	beforeEach(function() {
		calculator = new StringCalculator();
	});

	it('should return 0 for an empty string', function() {
		expect(calculator.add('')).toEqual(0);
	});

	it('should return 6 for input [1, 2, 3, 4, 5]', function() {
		expect(electronsAroundCores([1, 2, 3, 4, 5])).toEqual(6);
	});
	
	it('should return 4 for input [2, 2, 3, 3]', function() {
		expect(electronsAroundCores([2, 2, 3, 3])).toEqual(4);
	});
	
	it('should return 2 for input [6, 6, 4, 4, 1, 3]', function() {
		expect(electronsAroundCores([6, 6, 4, 4, 1, 3])).toEqual(2);
	});
	
	it('should return 12 for input [3, 5, 3, 5, 4, 2]', function() {
		expect(electronsAroundCores([3, 5, 3, 5, 4, 2])).toEqual(12);
	});
	
});
