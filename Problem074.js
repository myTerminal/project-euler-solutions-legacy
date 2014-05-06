var common = require("./Common");

exports.run = function () {
    var myFactorial = new common.Memoizer(common.factorialMemoizable),
        limit = 1000000,
        input,
        terms,
        chainLengths = { },
        loopers = { 169: 3,
		    871: 2,
		    872: 2,
		    2: 1,
		    1: 1,
		    145: 1 },
        sumOfFactorialOfDigits,
        count = 0;

    for(var i=1; i<limit ; i++, terms=1) {
	sumOfFactorialOfDigits = i;
	do {
	    input = sumOfFactorialOfDigits;
	    sumOfFactorialOfDigits = getSumOfFactorialsOfDigits(input);
	    terms++;
	    if(input == sumOfFactorialOfDigits)
		loopers[input] = input;
	}
	while(sumOfFactorialOfDigits!=i && !loopers[sumOfFactorialOfDigits]);

	chainLengths[i] = terms;
	if(terms == 58)
	    count++;
    }

    function getSumOfFactorialsOfDigits(number) {
	var stringNumber = number.toString();
	for(var i=0, sum=0; i<stringNumber.length; i++)
	    sum = sum +  myFactorial.getValue(parseInt(stringNumber[i]));
	return sum;
    }

    console.log("count: " + count);
    return count;
};
