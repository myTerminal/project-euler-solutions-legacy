exports.run = function () {
    var sum = 0,
        limit = 10000,
        amicableNumbers = [],
        divisorSum,
        divisorSum2,
	getDivisorsSum = function (number) {
	    for(var i=1, sum=0; i<=number/2; i++)
		if (number%i === 0)
		    sum += i;

	    return sum;    
	};

    for (var i=1; i<limit; i++) {
	if (amicableNumbers.indexOf(i) > -1)
	    continue;

	divisorSum = getDivisorsSum(i);

	if (divisorSum == i)
	    continue;

	divisorSum2 = getDivisorsSum(divisorSum);

	if(i==divisorSum2 && divisorSum!=divisorSum2) {
	    amicableNumbers.push(i);
	    amicableNumbers.push(divisorSum);
	}
    }

    for (i=0; i<amicableNumbers.length; i++)
	sum = sum + amicableNumbers[i];

    console.log("sum: " + sum);
    return sum;
};
