exports.run = function () {
    var numbers = [],
        totalSum = 0,
        currentNumber,
	getDigitPowerSums = function (number, power) {
	    for (var i=0, sum=0; i<number.length; i++)
		sum = sum + Math.pow(+(number[i]), power);

	    return sum;
	};

    for (var i=11; ; i++) {
	currentNumber = i.toString();

	if (currentNumber == getDigitPowerSums(currentNumber, 5)) {
	    totalSum += +(currentNumber);
	    numbers.push(currentNumber);

	    if (numbers.length >= 6)
		break;
	}
    }

    console.log("sum: " + totalSum);
    return totalSum;
};
