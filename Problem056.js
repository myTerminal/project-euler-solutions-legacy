var common = require("./Common");

exports.run = function () {
    var limit = 100,
        sums = [],
        output;

    for(var a=limit-1; a<limit; a++)
	for(var b=Math.floor(3*limit/4); b<limit; b++)
	    sums.push(getSumOfDigits(common.raiseBigNumber(a.toString(), b)));

    for(var a=Math.floor(3*limit/4); a<limit; a++)
	for(var b=limit-1; b<limit; b++)
	    sums.push(getSumOfDigits(common.raiseBigNumber(a.toString(), b)));

    function getSumOfDigits(number) {
	var digits = number.split("");
	for(var i=0, sum=0; i<digits.length; i++)
	    sum += (+digits[i]);
	return sum;
    }

    output = Math.max.apply(Math, sums);
    console.log("output: " + output);
    return output;
};
