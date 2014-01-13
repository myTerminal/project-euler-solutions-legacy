exports.run = function () {
    var palindromes = [],
	number=0;

    function isPalindrome(stringer) {
	return stringer === stringer.split("").reverse().join("");
    };

    for(var i=999; i>0 && !number; i--)
	for(var j=999; j>0 && !number; j--)
	    if(isPalindrome((i*j).toString()))
		palindromes.push(i*j);

    for(var i=0; i<palindromes.length; i++)
	if(palindromes[i]>number)
	    number = palindromes[i];

    console.log("number: " + number);
    return number;
};
