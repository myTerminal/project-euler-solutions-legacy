var common = require("./Common.js");

exports.run = function () {
    var number = 100;
        init = number.toString();
    for(i=number; i>1; i--)
	for(var j = 1, tempSum = init; j < i - 1; j++)
            init = common.addBigNumbers(init, tempSum);
    console.log("factorial :" + init);

    var sum = 0;
    for(i=0; i<init.length; i++)
	sum+=parseInt(init[i]);
    console.log("sum: " + sum);
    return sum;
}
