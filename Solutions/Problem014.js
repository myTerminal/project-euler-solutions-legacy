exports.run = function () {
    var limit = 1000000,
        sequenceLengths = new Array(limit),
	currentNumber,
        currentLength,
	getNextNumber = function (number) {
	    if (number%2 === 0)
		return number / 2;
	    else
		return (3 * number) + 1;
	},
	theNumber = 0,
        longestSequence = 0;

    for (var i=2; i<limit; i++) {
	currentNumber = i;
        currentLength = 1;
	
	while (currentNumber !== 1)
	    if (sequenceLengths[currentNumber]) {
		currentLength = currentLength + sequenceLengths[currentNumber] - 1;
		currentNumber = 1;
	    } else {
		currentNumber = getNextNumber(currentNumber);
		currentLength++;
	    }

	sequenceLengths[i] = currentLength;
    }

    for (i=0; i<limit; i++)
	if (sequenceLengths[i] > longestSequence) {
	    theNumber = i;
	    longestSequence = sequenceLengths[i];
	}

    console.log("Number :" + theNumber);
    return theNumber;
};
