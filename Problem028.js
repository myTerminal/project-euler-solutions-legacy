exports.run = function () {
    var sum = getSpiralSum(1001);

    function getSpiralSum(size) {
	return (size==1) ? 1 : (4*size*size - 6*size + 6) + getSpiralSum(size-2);
    }

    console.log("sum: " + sum);
    return sum;
};
