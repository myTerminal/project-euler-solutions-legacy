exports.run = function () {
    var numbers=[],
        limit = 2000000;

    for(i=0; i<limit; i++)
	numbers.push(i);
    numbers[1] = 0;

    for(i=2; i<limit; i++)
	for(j=i*i; j<limit; j=j+i)
            if(j%i===0)
		numbers[j]=0;

    var sum = 0;
    for(i=0; i<limit; i++)
	sum+=numbers[i];

    console.log("sum: " + sum);
    return sum;
}
