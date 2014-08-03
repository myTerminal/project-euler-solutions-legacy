exports.run = function () {
    var count = 0,
        limit = 10000000,
        cache = [],
	getNextNumber = function (number) {
	    var numberAsString = number.toString(),
		digit;

	    for (var i=0, sum=0; i<numberAsString.length; i++) {
		digit = +numberAsString[i];
		sum += (digit * digit);
	    }
	    return sum;
	},
	endsAt89 = function (number) {
	    var nextNumber = number;

	    while (nextNumber!=89 && nextNumber!=1)
		nextNumber = cache[nextNumber] || getNextNumber(nextNumber);
	    
	    cache[number] = nextNumber;
	    return nextNumber == 89;
	};
    
    for (var i=1; i<=limit; i++) {
	if (endsAt89(i))
	    count++;
    }

    console.log("count: " + count);
    return count;
};
