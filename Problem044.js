exports.run = function () {
    var pentagonalCollection = [],
        limit = 2500,
        d;

    for(var i=1; i<=limit; i++)
	pentagonalCollection.push(i*(3*i-1)/2);

    for(var i=0, sum, diff; i<limit; i++)
	for(var j=i+1, firstNumber, secondNumber; j<limit; j++) {
	    firstNumber = pentagonalCollection[i];
	    secondNumber = pentagonalCollection[j];
	    sum = secondNumber + firstNumber;
	    diff = secondNumber - firstNumber;
	    
	    if(diff && (diff > d))
		break;

	    if(pentagonalCollection.indexOf(sum)>-1 &&
	       pentagonalCollection.indexOf(diff)>-1)
		d = diff;
	}
	    
    console.log("d: " + d);
    return d;
};
