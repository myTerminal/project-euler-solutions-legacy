var common = require("./Common");

exports.run = function () {
    var limit = 100000,
        resilienceRatio = 4/10,
        primes = common.getPrimesBelowNumber(50000000),
        primesL = [],
    	number = 0;
    
    (function getPrimes() {
	for(var i=0; i<primes.length; i++)
	    if(primes[i])
		primesL.push(i);
	console.log("Largest prime: " + primesL[primesL.length-1]);
    })();
        
    function isPrime(number) {
	return primesL.indexOf(number)>-1;
    }

    function getResilienceRatio(number) {
	return getTotient(number) / (number-1);
    }

    function getTotient(number) {
	var product = 1,
	    factors = getPrimeFactors(number);
	for(var i=0; i<factors.length; i++)
	    product *= (1 - (1/factors[i]));
	return Math.floor(number * product);
    }

    function getPrimeFactors(number) {
	var factors = [];
	for(var i=0; i<primesL.length && primesL[i]<=number; i++)
	    if(number%primesL[i]==0)
		factors.push(primesL[i]);
	return factors;
    }

    resilienceRatio = 15499/94744;

    for(var i=2; i<limit && !number; i++) {
//    for(var i=94744; !number && false; i+=94744) {
	if(isPrime(i))
	    continue;
	var res = getResilienceRatio(i);
	if(i%100==0)
	    console.log(i + ", " + res);
	if(res<resilienceRatio)
	    number = i;
    }

    console.log("number: " + number);
    return number;
};
