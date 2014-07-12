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
	getAnswer(problemNumber);
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

var getAnswer = function (paddedProblemNumber) {
    return require("./Problem" + paddedProblemNumber).run();
};

var testProblem = function (problem) {
    var expectedResult = problem.result,
        actualResult;

    printProblemHeader(problem);

    try {
	actualResult = getAnswer(problem.number);
	printActualResult(actualResult);

	if (actualResult == expectedResult)
	    printSuccessMessage();
	else {
	    printFailureMessage();
	    return false;
	}
    }
    catch(e) {
	if (e.code==="MODULE_NOT_FOUND")
	    console.log("Problem not solved yet!");
	else {
	    printExceptionMessage(problem);
	    return false;
	}
    }

    return true;
};

var runAllTests = function (problems) {
    var failure;
    for (var i=0; i<problems.length; i++) {
	if (!testProblem(problems[i]))
	    failure = true;
    }

    if (failure)
	console.error("\nSOME TESTS FAILED!\n");
    else
	console.log("\nAll " + problems.length + " tests passed!\n");
};

var printProblemHeader = function (problem) {
    console.log("\nRunning problem " + problem.number + "...");
    console.log("Expected result: " + problem.result);
};

var printActualResult = function (actualResult) {
    console.log("Actual result: " + actualResult);
};

var printSuccessMessage = function () {
    console.log("Test successful!");
};

var printFailureMessage = function () {
    console.error("*** FAILURE! ***");
};

var printExceptionMessage = function (problem) {
    console.log("********************************");
    console.log("Exception in problem " + problem.number);
    console.log("********************************");
};

exports.Problem = Problem;
exports.runProblem = runProblem;
exports.getAnswer = getAnswer;
exports.runAllTests = runAllTests;
