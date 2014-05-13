exports.run = function () {
    var sum = 0,
	getSelfPower = function (number) {
	    return raiseNumber(number, number);
	},
	raiseNumber = function (number, power) {
	    for (var i=0, raisedNumber=1; i<power; i++)
		raisedNumber = reduceToTenDigits(raisedNumber * number);

	    return raisedNumber;
	},
	reduceToTenDigits = function (number) {
	    var stringNumber = number.toString();

	    return stringNumber.length>10 
		? +(stringNumber.substr(stringNumber.length-10)) 
		: number;
	},
	output;

    for (var i=1; i<=1000; i++)
	sum = reduceToTenDigits(sum) + getSelfPower(i);

    output = reduceToTenDigits(sum);

    console.log("output: " + output);
    return output;
};
