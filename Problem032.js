exports.run = function () {
    var products = [],
        limit = 10000,
        product,
        term;
    for(var i=1; i<=limit; i++)
	for(var j=i, lengthExceeded = false; j<=limit && !lengthExceeded; j++) {
	    product = i*j;
	    term = product.toString() + i.toString() + j.toString();

	    if(term.length>9)
		lengthExceeded = true;

	    if(term.length==9 && containsAllDigits(term) && products.indexOf(product)<0) {
		products.push(product);
	    }
	}
    
    function containsAllDigits(number) {
	for(var i=1; i<=9; i++) {
	    number = number.replace(i.toString(), "");
	}
	return !number.length;
    }

    console.log(products);
    var sum = 0;
    for(var i=0; i<products.length; i++) {
	sum += products[i];
    }
    console.log("sum :" + sum);
    return sum;
}
