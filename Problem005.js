exports.run = function () {
    var number;

    for(var i=20; !number; i=i+20)
	if(isNumberDivisibleBy1To20(i))
	    number = i;

    function isNumberDivisibleBy1To20(number) {
	for(var i=3; i<20; i++)
	    if(number%i!==0)
		return false;
	return true;
    };

    console.log("number: " + number);
    return number;
};
