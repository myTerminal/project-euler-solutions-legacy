exports.run = function () {
    var numbers = [],
        limit = 1000000,
	isNumberInteresting = function (number) {
	    var isInterestingYet = true;

	    for (var i=1; i<number.length && isInterestingYet; i++)
		isInterestingYet = isNumberPrime(+(number.substr(i)));
	    
	    for (i=number.length-1; i>0 && isInterestingYet; i--)
		isInterestingYet = isNumberPrime(+(number.substr(0, i)));

	    return isInterestingYet;
	},
	isNumberPrime = function (number) {
	    return !!numbers[number];
	},
	outputNumbers = [],
	count = 0,
	sum = 0;

    for (i=0; i<limit; i++)
	numbers.push(i);

    numbers[1] = 0;

    for (i=2; i<limit; i++)
	for (var j=i*i; j<limit; j=j+i)
            if (j%i === 0)
		numbers[j]=0;

    for (var i=11; count<11; i++)
	if (numbers[i] 
	    && isNumberInteresting(numbers[i].toString())) {

	    outputNumbers.push(i);
	    count++;
	}

    for (i=0; i<outputNumbers.length; i++)
	sum += outputNumbers[i];

    console.log("sum: " + sum);
    return sum;
};
