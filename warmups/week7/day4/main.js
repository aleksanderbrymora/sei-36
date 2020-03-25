const grains = {
	grainsOnSquare: function(square) {
		return 2 ** (square - 1);
	},

	allSquares: function() {
		const allSquares = [];
		for (let i = 1; i <= 64; i++) {
			allSquares.push(grainsOnSquare(i));
		}
		return allSquares;
	},

	printAllSquares: function() {
		const allSquares = this.allSquares();
		allSquares.map(function(square, index) {
			console.log(`Square ${index + 1}: ${square}`);
		});
	},

	totalGrainsOnBoard: function() {
		const allSquares = this.allSquares();
		return allSquares.reduce(function(acc, curr) {
			return acc + curr;
		});
	},
};
