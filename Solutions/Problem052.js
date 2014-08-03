exports.run = function () {
    var number,
	number1,
        number2,
        number3,
        number4,
        number5,
        number6,
	scaleNumber = function (number, mag) {
	    return number * mag;
	},
	getSortedDigits = function (number) {
	    return number.toString().split("").sort().join("");
	};

    for (var i = 11; !number; i++) {
	if (i.toString().length != scaleNumber(i, 6).toString().length)
	    continue;

	number1 = getSortedDigits(i);
	number2 = getSortedDigits(scaleNumber(i, 2));
	number3 = getSortedDigits(scaleNumber(i, 3));
	number4 = getSortedDigits(scaleNumber(i, 4));
	number5 = getSortedDigits(scaleNumber(i, 5));
	number6 = getSortedDigits(scaleNumber(i, 6));

	if (number1 == number2 
	   && number2 == number3 
	   && number3 == number4 
	   && number4 == number5 
	   && number5 == number6)
	    number = i;
    }
    
    console.log("number: " + number);
    return number;
};
