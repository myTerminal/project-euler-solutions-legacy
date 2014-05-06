var common = require("./Common");

exports.run = function () {
    var limit = 10000,
    	number = 600851475143,
    	primes = common.getPrimesBelowNumber(limit),
    	output;

    for (var i=primes.length-1; i>0 && !output; i--)
	if (number%primes[i] === 0)
	    output = primes[i];

    console.log("output: " + output);
    return output;
};
