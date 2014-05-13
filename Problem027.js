var common = require("./Common");

exports.run = function () {
    var primes = common.getPrimesBelowNumber(20000),
        product = 1,
        limit = 1000,
        collection = [],
	isPrime = function (number) {
	    return !!primes[number];
	},
	getCountOfPrimes = function (a, b) {
	    var count = 0,
		i = 0,
		generatedPrime,
		isCompositeFound;

	    while (!isCompositeFound) {
		generatedPrime = i*i + a*i + b;
		isCompositeFound = !isPrime(generatedPrime);

		if (!isCompositeFound)
		    count++;

		i++;
	    }

	    return count;
	},
	max = { n: 0},
        obj;

    for (var i=-limit+1; i<=limit-1; i++)
	for (var j=-limit+1; j<=limit-1; j++) {
	    collection.push({
		a: i,
		b: j,
		n: getCountOfPrimes(i, j)
	    });
	}

    for (i=0; i<collection.length; i++) {
	obj = collection[i];

	if (obj.n > max.n)
	    max = obj;
    }
    
    product = max.a * max.b;

    console.log("product: " + product);
    return product;
};
