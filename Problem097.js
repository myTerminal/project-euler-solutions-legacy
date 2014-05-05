var common = require("./Common");

exports.run = function () {
    var init = "2",
	power = 7830457,
        output = 0,
	getLastTenDigits = function (numberInString) {
	    var len = numberInString.length;
	    return numberInString.substring(len - 10);
	};

    for (var i=1; i<=power-1; i++) {
	init = common.addBigNumbers(init, init);
	init = getLastTenDigits(init);
    }

    output = common.multiplyBigNumbers(init, "28433");
    output = getLastTenDigits(output);
    output = common.addBigNumbers(output, "1");

    console.log("output :" + output);
    return output;
};
