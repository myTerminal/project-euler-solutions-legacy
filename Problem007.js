var common = require("./Common");

exports.run = function () {
    var primes = common.getPrimesBelowNumber(500000),
    	count = 0,
    	prime;

    for(var i=0; i<primes.length && !prime; i++) {
	if(primes[i])
	    count++;
	if(count>=10001)
	    prime = primes[i];
    }

    console.log("prime: " + prime);
    return prime;
};
