exports.run = function () {
    var triangleCollection = [],
        pentagonalCollection = [],
        hexagonalCollection = [],
        limit = 60000,
        number;

    for(var i=285; i<limit; i++) {
	triangleCollection.push(i*(i+1)/2);
	pentagonalCollection[i*(3*i-1)/2] = true;
	hexagonalCollection[i*(2*i-1)] = true;
    }

    var currentTriangle;
    for(var i=0; i<triangleCollection.length && !number; i++) {
	currentTriangle = triangleCollection[i];
	if(pentagonalCollection[currentTriangle] && hexagonalCollection[currentTriangle])
	    number = currentTriangle;
    }
    
    console.log("number: " + number);
    return number;
}
