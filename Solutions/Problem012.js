var common = require("./Common");

exports.run = function () {
    var limit = 10,
        primes = common.getPrimesBelowNumber(5000000),
        primesL = [],
    	count,
    	output,
	getPrimeFactors = function (number) {
	    var func = (typeof(this) === "function") 
		    ? this 
		    : getPrimeFactors,
		primeFactors = [];
	    
	    for (var index=0; index<primesL.length; index++) {
		var count = 0;
		
		while (number%primesL[index] == 0) {
		    count++;
		    number = number / primesL[index];
		}
		
		if (count>0)
		    primeFactors.push([primesL[index], count]);
	    }
	    return primeFactors;
	},
        getPrimeFactorsM = common.Memoizer(getPrimeFactors),
	getTotalDivisors = function (primeFactors) {
	    var totalDivisors = 1;
	    
	    for (var index=0; index<primeFactors.length; index++) {
		totalDivisors *= (primeFactors[index][1] + 1);
	    }
	    
	    return totalDivisors;
	};
    
    (function getPrimes() {
	for(var i=0; i<primes.length; i++)
	    if(primes[i])
		primesL.push(i);
    })();

    var a,
        b,
        primeFactors,
        totalDivisors;
    for (var i=1, j=i+1; !output; i+=2, j+=2) {
	a = (i%2 === 0) 
	    ? i / 2 
	    : i;
	b = (j%2 === 0) 
	    ? j / 2 
	    : j;
	primeFactors = getPrimeFactorsM.getValue(a).concat(getPrimeFactorsM.getValue(b));
	totalDivisors = getTotalDivisors(primeFactors);

	if (totalDivisors >= 500)
	    output = a * b;
    }

    console.log("output: " + output);
    return output;
};
