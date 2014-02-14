var common = require("./Common");

exports.run2 = function () {
    var limit = 10,
        primes = common.getPrimesBelowNumber(5000000),
        primesL = [],
    	count,
    	output;
    (function getPrimes() {
	for(var i=0; i<primes.length; i++)
	    if(primes[i])
		primesL.push(i);
	console.log("Largest prime: " + primesL[primesL.length-1]);
    })();

    function getDivisorCount(number) {
	var numberOfDivisors = 1;
	for(var index=0; index<primesL.length; index++) {
	    var count = 0;
	    while(number%primesL[index] == 0) {
		count++;
		number = number/primesL[index];
	    }
	    if(count>0)
		numberOfDivisors *= (count + 1);
	}
	return numberOfDivisors; 
    }
    
    var divisorCount;
    for(var i=1, number=0; !output; i++) {
	number = number + i;

	divisorCount = getDivisorCount(number);

	if(divisorCount>=500)
	    output=number;
    }

    console.log("output: " + output);
    return output;
}; // Provides results in around 40 seconds

exports.run = function () {
    var limit = 10,
        primes = common.getPrimesBelowNumber(5000000),
        primesL = [],
    	count,
    	output,
        getPrimeFactorsM = common.Memoizer(getPrimeFactors);
    (function getPrimes() {
	for(var i=0; i<primes.length; i++)
	    if(primes[i])
		primesL.push(i);
	console.log("Largest prime: " + primesL[primesL.length-1]);
    })();

    function getPrimeFactors(number) {
	var func = (typeof(this) === "function") ? this : getPrimeFactors;
	var primeFactors = [];
	
	for(var index=0; index<primesL.length; index++) {
	    var count = 0;
	    while(number%primesL[index] == 0) {
		count++;
		number = number/primesL[index];
	    }
	    if(count>0) {
		primeFactors.push([primesL[index], count]);
	    }
	}
	return primeFactors;
    }

    function getTotalDivisors(primeFactors) {
	var totalDivisors = 1;

	for(var index=0; index<primeFactors.length; index++) {
	    totalDivisors *= (primeFactors[index][1] + 1);
	}

	return totalDivisors;
    }

    var a,
        b,
        primeFactors,
        totalDivisors;
    for(var i=1, j=i+1; !output; i+=2, j+=2) {
	a = (i%2==0) ? i/2 : i;
	b = (j%2==0) ? j/2 : j;
	primeFactors = getPrimeFactorsM.getValue(a).concat(getPrimeFactorsM.getValue(b));
	totalDivisors = getTotalDivisors(primeFactors);

	if(totalDivisors>=500)
	    output = a * b;
    }

    console.log("output: " + output);
    return output;
}; // Provides results in around 26 seconds
