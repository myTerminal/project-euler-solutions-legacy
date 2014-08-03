exports.run = function () {
    var number,
	isNumberDivisibleBy1To20 = function (number) {
	    for (var i=3; i<20; i++)
		if (number%i !== 0)
		    return false;
	    
	    return true;
	};
    
    for (var i=20; !number; i=i+20)
	if(isNumberDivisibleBy1To20(i))
	    number = i;

    console.log("number: " + number);
    return number;
};
