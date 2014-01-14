exports.run = function () {
    var sumOfSquares = 0,
    	squareOfSum = 0,
	difference;

    for(var i=1; i<=100; i++) {
	sumOfSquares = sumOfSquares + i*i;
	squareOfSum = squareOfSum + i;
    }
    squareOfSum = squareOfSum * squareOfSum;
    difference = squareOfSum - sumOfSquares;

    console.log("difference: " + difference);
    return difference;
};
