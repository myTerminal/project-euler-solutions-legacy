var common = require("./Common");

exports.run = function () {
    var limit = 10000,
        lychrelCount = 0,
	reverseNumber = function (number) {
	    return number.split("").reverse().join("");
	},
	addReverse = function (number) {
	    return common.addBigNumbers(number, reverseNumber(number));
	},
	isPalindrome = function (number) {
	    return number == reverseNumber(number);
	},
	isLychrel = function (number) {
	    var count = 0;

	    do {
		number = addReverse(number);
		count++;
	    }
	    while (!isPalindrome(number) 
		   && count < 50);

	    return count == 50;
	};

    for (var i=1; i<limit; i++)
	if (isLychrel(i.toString()))
	    lychrelCount++;

    console.log("lychrelCount: " + lychrelCount);
    return lychrelCount;
};
