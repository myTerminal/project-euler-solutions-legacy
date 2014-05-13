exports.run = function () {
    var triangleCollection = [],
        pentagonalCollection = [],
        hexagonalCollection = [],
        limit = 60000,
        number;

    for (var i=285; i<limit; i++) {
	triangleCollection.push(i*(i+1)/2);
	pentagonalCollection[i*(3*i-1)/2] = true;
	hexagonalCollection[i*(2*i-1)] = true;
    }

    for (var i=0, triangle; i<triangleCollection.length && !number; i++) {
	triangle = triangleCollection[i];

	if (pentagonalCollection[triangle] 
	    && hexagonalCollection[triangle])
	    number = triangle;
    }
    
    console.log("number: " + number);
    return number;
};
