exports.run = function () {
    var number,
	countOfBouncyNumbers = 0,
	currentPercentage,
	targetPercentage = 99,
	isIncreasingNumber = function (number) {
	    var numberInString = number.toString(),
		digits = numberInString.split(""),
		isNegative;

	    for (var i=1; i<digits.length && !isNegative; i++)
		isNegative = (+digits[i] - +digits[i-1]) < 0;
	    
	    return !isNegative;
	},
	isDecreasingNumber = function (number) {
	    var numberInString = number.toString(),
		digits = numberInString.split(""),
		isPositive;

	    for (var i=1; i<digits.length && !isPositive; i++)
		isPositive = (+digits[i] - +digits[i-1]) > 0;
	    
	    return !isPositive;
	};

    for (var i=100; !number; i++) {
	if (!isIncreasingNumber(i) && !isDecreasingNumber(i))
	    countOfBouncyNumbers++;

	currentPercentage = (countOfBouncyNumbers * 100) / i;
	
	if(currentPercentage == targetPercentage)
	    number = i;
    }

    console.log("number: " + number);
    return number;
};
