var common = require("./Common");

exports.run = function () {
    var primes = common.getPrimesBelowNumber(20000),
        product = 1,
        limit = 1000,
        collection = [];
    
    function isPrime(number) {
	return !!primes[number];
    }

    for(var i=-limit+1; i<=limit-1; i++)
	for(var j=-limit+1; j<=limit-1; j++) {
	    collection.push({ a: i, b: j, n: getCountOfPrimes(i, j) });
	}

    function getCountOfPrimes(a, b) {
	var count = 0,
	    i = 0,
	    generatedPrime,
	    isCompositeFound;
	while(!isCompositeFound) {
	    generatedPrime = i*i + a*i + b;
	    isCompositeFound = !isPrime(generatedPrime);
	    if(!isCompositeFound)
		count++;
	    i++;
	}
	return count;
    }

    var max = { n: 0},
        obj;
    for(var i=0; i<collection.length; i++) {
	obj = collection[i];
	if(obj.n>max.n)
	    max = obj;
    }
    
    product = max.a * max.b;
    console.log("product: " + product);
    return product;
};
