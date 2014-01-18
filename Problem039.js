exports.run = function () {
    var limit = 1000,
        solutions = [],
        number = 0;

    function getNumberOfSolutions(perimeter) {
	for(var a=1, count=0; a<perimeter; a++)
	    for(var b=a; b<perimeter-a; b++)
		if(a*a + b*b == Math.pow(perimeter - a - b, 2))
		    count++;
	return count;
    }
    
    for(var i=0; i<=limit; i++)
	solutions.push(getNumberOfSolutions(i));

    for(var i=0, max=0; i<solutions.length; i++)
	if(solutions[i]>max) {
	    max = solutions[i];
	    number = i;
	}

    console.log("number: " + number);
    return number;
};
