exports.run = function () {
    var limit = 1000000,
        sum = 0;

    function isPalindromic(stringer) {
	return stringer===stringer.split("").reverse().join("");
    }

    for(i=1; i<limit; i++)
	if(isPalindromic(i.toString()) && isPalindromic(i.toString(2)))
	    sum+=i;

    console.log("sum: " + sum);
    return sum;
}
