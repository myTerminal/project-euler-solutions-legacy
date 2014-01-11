var common = require("./Common");

exports.run = function () {
    var limit = 1000000,
        numbers = common.getPrimesBelowNumber(limit);

    var count = 0;
    for(i=0; i<limit; i++)
	if(numbers[i] && areAllPrime(getRotations(i)))
	    count++;

    function getRotations(number) {
	var stringNumber = number.toString(),
	    iterations = stringNumber.length,
	    rotations = [number];
	for(var i=0; i<iterations-1; i++) {
	    stringNumber = stringNumber.substr(1) + stringNumber.substr(0,1);
	    rotations.push(parseInt(stringNumber));
	}
	return rotations;
    }

    function areAllPrime(rotations) {
	for(var i=0; i<rotations.length; i++)
	    if(!numbers[rotations[i]])
		return false;
	return true;
    }

    console.log("count: " + count);
    return count;
};
