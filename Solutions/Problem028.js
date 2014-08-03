exports.run = function () {
    var sum,
	getSpiralSum = function (size) {
	    return (size==1) 
		? 1 
		: (4*size*size - (6 * size) + 6) + getSpiralSum(size-2);
	};

    sum = getSpiralSum(1001);

    console.log("sum: " + sum);
    return sum;
};
