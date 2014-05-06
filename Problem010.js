var common = require("./Common");

exports.run = function () {
    var limit = 2000000,
        numbers = common.getPrimesBelowNumber(limit),
        sum = 0;
    
    for (var i=0; i<limit; i++)
	sum += numbers[i];

    console.log("sum: " + sum);
    return sum;
};
