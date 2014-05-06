var common = require("./Common");

exports.run = function () {
    var myFactorial = new common.Memoizer(common.factorialMemoizable),
        numbers = [],
        sumOfFactorialsOfDigits,
        sum = 0;

    for(var i=10; i<1000000 ; i++) {
	sumOfFactorialsOfDigits = getSumOfFactorialsOfDigits(i);
	if(sumOfFactorialsOfDigits==i) {
	    numbers.push(i);
	    sum += i;
	}
    }

    function getSumOfFactorialsOfDigits(number) {
	var stringNumber = number.toString(),
            sum = 0;
	for(var i=0; i<stringNumber.length; i++)
	    sum = sum +  myFactorial.getValue(parseInt(stringNumber[i]));
	return sum;
    }

    console.log("sum: " + sum);
    return sum;
};
