exports.run = function () {
    var limit = 1000,
    	sum = 0;

    function isMultipleOfThree(number) {
	return (number%3===0);
    };

    function isMultipleOfFive(number) {
	return (number%5===0);
    };

    for(var i=1; i<limit; i++)
	if(isMultipleOfThree(i) || isMultipleOfFive(i))
	    sum += i;

    console.log("sum: " + sum);
    return sum;
};
