exports.run = function () {
    var sum = 0;

    function getSelfPower(number) {
	return raiseNumber(number, number);
    }

    function raiseNumber(number, power) {
	var raisedNumber;
	for(var i=0, raisedNumber=1; i<power; i++)
	    raisedNumber = reduceToTenDigits(raisedNumber * number);
	return raisedNumber;
    };

    function reduceToTenDigits(number) {
	var stringNumber = number.toString();
	return stringNumber.length>10 ? parseInt(stringNumber.substr(stringNumber.length-10), 10) : number;
    }

    for(var i=1; i<=1000; i++)
	sum = reduceToTenDigits(sum) + getSelfPower(i);

    var output = reduceToTenDigits(sum);
    console.log("output: " + output);
    return output;
}
