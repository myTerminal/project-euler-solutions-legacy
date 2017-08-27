exports.run = function () {
    var number;

    function getRecurringLength(number) {
	var fractionPart = number.toString().split(".")[1];
	console.log("fractionPart: " + fractionPart);
	console.log((/(.)\1/).test(fractionPart, function(stringer) {
	    console.log(stringer);
	}));
	if(!fractionPart)
	    return 0;
	return "some";
    }


    number = getRecurringLength(1/3);
    console.log("number: " + number);
    return number;
};
