var common = require("./Common");

exports.run = function () {
    var limit = 100,
        count = 0;

    for(var digits=1, hasExceeded, skipCount=0; digits<limit; digits++, hasExceeded=false)
	for(var i=1; !hasExceeded && skipCount<2; i++) {
	    var number = common.raiseBigNumber(i.toString(), digits);

	    if(number.length == digits) {
		count++;
		skipCount = 0;
	    }
	    if(number.length > digits) {
		hasExceeded = true;
		skipCount++;
	    }
	}

    console.log("count: " + count);
    return count;
};
