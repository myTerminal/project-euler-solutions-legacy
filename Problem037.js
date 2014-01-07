var common = require("./Common");

exports.run = function () {
    var numbers=[],
        limit = 1000000;

    for(i=0; i<limit; i++)
	numbers.push(i);
    numbers[1] = 0;

    for(i=2; i<limit; i++)
	for(j=i*i; j<limit; j=j+i)
            if(j%i===0)
		numbers[j]=0;

    var outputNumbers = [],
        count = 0;
    for(var i=11; count<11; i++) {
	if(numbers[i] && isNumberInteresting(numbers[i].toString())) {
	    outputNumbers.push(i);
	    count++;
	}
    }

    function isNumberInteresting(number) {
	var isInterestingYet = true;

	for(var i=1; i<number.length && isInterestingYet; i++)
	    isInterestingYet = isNumberPrime(parseInt(number.substr(i)));
	
	for(var i=number.length-1; i>0 && isInterestingYet; i--)
	    isInterestingYet = isNumberPrime(parseInt(number.substr(0, i)));	    
	return isInterestingYet;
    }

    function isNumberPrime(number) {
	return !!numbers[number];
    }

    console.log(outputNumbers);
    var sum = 0;
    for(var i=0; i<outputNumbers.length; i++)
	sum += outputNumbers[i];

    console.log("sum: " + sum);
    return sum;
}
