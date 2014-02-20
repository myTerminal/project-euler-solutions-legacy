var common = require("./Common");

exports.run = function () {
    var limit = 200000,
        primes = common.getPrimesBelowNumber(50000),
        primesL = [],
        divisors = [],
        number;
    (function getPrimes() {
	for(var i=0; i<primes.length; i++)
	    if(primes[i])
		primesL.push(i);
    })();

    function getPrimeFactors(number) {
	var primeFactors = [],
	    count;
	for(var index=0; index<primesL.length; index++) {
	    count = 0;
	    while(number%primesL[index] == 0) {
		count++;
		number = number/primesL[index];
	    }
	    if(count>0)
		primeFactors.push(primesL[index]);
	}
	return [primeFactors.toString(), primeFactors.length];
    }
    
    for(var i=1; i<limit; i++)
	divisors[i] = getPrimeFactors(i);

    var a = divisors[0],
        b = divisors[1], 
	c = divisors[2],
        d = divisors[3];    
    for(var i=4; i<limit && !number; i++) {
	a = b;
	b = c;
	c = d;
	d = divisors[i];
	if(a[1]==4 && b[1]==4 && c[1]==4 && d[1]==4 && a[0]!=b[0] && a[0]!=c[0] && a[0]!=d[0] && b[0]!=c[0] && b[0]!=d[0] && c[0]!=d[0])
	    number = i-3;
    }

    console.log("number: " + number);
    return number;
};
