var product;
for(a=1; a<1000; a++)
    for(b=1; b<1000; b++)
    {
	var sqrtOfSum = Math.sqrt(a*a + b*b);
	if((a + b + sqrtOfSum == 1000))
	    product = a * b * sqrtOfSum;
    }
console.log("product: " + product);

