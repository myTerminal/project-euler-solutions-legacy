var common = require("./Common.js");

exports.run = function () {
    var number = 100,
	init = number.toString(),
	sum = 0;

    for (var i=number; i>1; i--)
	for (var j=1, tempSum=init; j<i-1; j++)
            init = common.addBigNumbers(init, tempSum);

    console.log("factorial :" + init);

    for (i=0; i<init.length; i++)
	sum += +(init[i]);

    console.log("sum: " + sum);
    return sum;
};
