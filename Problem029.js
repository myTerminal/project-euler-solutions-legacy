exports.run = function () {
    var limitLow = 2,
    	limitHigh = 100,
    	count = 0,
    	terms = [],
    	currentTerm;

    for(var a=limitLow; a<=limitHigh; a++)
	for(var b=limitLow; b<=limitHigh; b++) {
	    currentTerm = Math.log(Math.pow(a, b));
	    if(terms.indexOf(currentTerm)<0)
		terms.push(currentTerm);
	}

    count = terms.length;
    console.log("Number of terms: " + count);
    return count;
}
