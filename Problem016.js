var common = require("./Common");

exports.run = function () {
    var init = "2",
        sum = 0;
    for (i = 2; i <= 1000; i++)
	init = common.addBigNumbers(init, init);
    for (i = 0; i < init.length; i++)
	sum += parseInt(init[i]);
    console.log("sum :" + sum);
    return sum;
}
