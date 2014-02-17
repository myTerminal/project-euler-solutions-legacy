var common = require("./Common");

exports.run = function () {
    var limit = 10000,
        lychrelCount = 0;

    for(var i=1; i<limit; i++)
	if(isLychrel(i.toString()))
	    lychrelCount++;

    function reverseNumber(number) {
	return number.split("").reverse().join("");
    }

    function addReverse(number) {
	return common.addBigNumbers(number, reverseNumber(number));
    }

    function isPalindrome(number) {
	return number == reverseNumber(number);
    }

    function isLychrel(number) {
	var count = 0;
	do {
	    number = addReverse(number);
	    count++;
	}
	while(!isPalindrome(number) && count<50);
	return count==50;
    }

    console.log("lychrelCount: " + lychrelCount);
    return lychrelCount;
};
