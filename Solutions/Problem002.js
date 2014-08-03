var common = require("./Common");

exports.run = function () {
    var limit = 4000000,
    	sum = 0,
	i = 1,
    	currentTerm = 0,
    	myFunc = new common.Memoizer(common.fibonacciMemoizable);

    while (currentTerm < limit) {
	currentTerm = myFunc.getValue(i);

	if (currentTerm%2 === 0)
	    sum += currentTerm;

	i++;
    };

    console.log("sum: " + sum);
    return sum;
};
