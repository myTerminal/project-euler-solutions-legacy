var common = require("./Common");

exports.run = function () {
    var numbers = [],
        totalSum = 0,
        currentNumber;
    for(var i=11; ; i++) {
	currentNumber = i.toString();
	if(currentNumber==getDigitPowerSums(currentNumber, 5)) {
	    totalSum += parseInt(currentNumber);
	    numbers.push(currentNumber);
	    if(numbers.length>=6)
		break;
	}
    }

    function getDigitPowerSums(number, power) {
	var sum = 0;
	for(var i=0; i<number.length; i++)
	    sum = sum + Math.pow(parseInt(number[i]), power);
	return sum;
    }

    console.log("sum: " + totalSum);
    return totalSum;
}
