module.exports = function () {
    var Problem = function (number, result) {
	this.number = number;
	this.result = result;
    };

    var runProblem = function (problemNumber) {
	var start,
            end;

	problemNumber = getPaddedProblemNumber(problemNumber);
	start = new Date(),
	
	console.log("Running problem " + problemNumber + "...");
	console.log("----------------------------\n");

	try {
	    getResult(problemNumber);
	    end = new Date();

	    console.log("\n----------------------------");
	    console.log("Time taken: " + (end - start) + " milliseconds");
	}
	catch (e) {
	    if (e.code==="MODULE_NOT_FOUND")
		console.log("Problem not solved yet!");
	}
    };

    var getPaddedProblemNumber = function (problemNumber) {
	while (problemNumber.length < 3)
	    problemNumber = "0" + problemNumber;

	return problemNumber;
    };

    var getResult = function (problemNumber) {
	var paddedProblemNumber = getPaddedProblemNumber(problemNumber);
	return require("./Problem" + paddedProblemNumber).run();
    };
    
    return {
	Problem: Problem,
	runProblem: runProblem,
	getResult: getResult
    };
};
