exports.run = function () {
    var triangleCollection = [],
        pentagonalCollection = [],
        hexagonalCollection = [],
        limit = 60000,
        number;

    for(var i=285; i<limit; i++) {
	triangleCollection.push(i*(i+1)/2);
	pentagonalCollection.push(i*(3*i-1)/2);
	hexagonalCollection.push(i*(2*i-1));
    }

    var currentTriangle;
    for(var i=0; i<triangleCollection.length && !number; i++) {
	currentTriangle = triangleCollection[i];
	if(pentagonalCollection.indexOf(currentTriangle)>-1 && hexagonalCollection.indexOf(currentTriangle)>-1)
	    number = currentTriangle;
    }
    
    console.log("number: " + number);
    return number;
}
