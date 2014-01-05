
var Problem = function (number, result) {
    this.number = number;
    this.result = result;
};

var problems = [new Problem("009", 31875000),
		new Problem("010", "142913828922"),
		new Problem("013", "5537376230"),
		new Problem("014", 837799),
		new Problem("016", 1366),
		new Problem("017", 21124),
		new Problem("019", 171),
		new Problem("020", 648),
		new Problem("022", "871198282"),
		new Problem("024", "2783915460"),
		new Problem("025", 4782),
		new Problem("030", 443839),
		new Problem("034", 40730)];

var failure;
for(var i=0; i<problems.length; i++) {
    if(!runProblem(problems[i]))
	failure = true;
}

if(failure)
    console.error("\nSOME TESTS FAILED!\n");
else
    console.log("\nAll tests passed!\n");

function runProblem(problem) {
    var problemNumber = problem.number,
        expectedResult = problem.result,
        actualResult;

    console.log("\nRunning problem " + problemNumber + "...");
    console.log("Expected result: " + expectedResult);
    try {
	actualResult = require("./Problem" + problemNumber).run();
	console.log("Actual result: " + actualResult);
	if(actualResult==expectedResult)
	    console.log("Test successful!");
	else {
	    console.error("*** FAILURE! ***");
	    return false;
	}
    }
    catch(e) {
	if(e.code==="MODULE_NOT_FOUND")
	    console.log("Problem not solved yet!");
    }

    return true;
}
