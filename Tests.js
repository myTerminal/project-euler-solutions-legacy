
var Problem = function (number, result) {
    this.number = number;
    this.result = result;
};

var problems = [new Problem("001", 233168),
		new Problem("002", 4613732),
		new Problem("003", 6857),
		new Problem("004", 906609),
		new Problem("005", "232792560"),
		new Problem("006", 25164150),
		new Problem("007", 104743),
		new Problem("008", 40824),
    		new Problem("009", 31875000),
		new Problem("010", "142913828922"),
		new Problem("011", 70600674),
		new Problem("012", 76576500),
		new Problem("013", "5537376230"),
		new Problem("014", 837799),
		new Problem("015", "137846528820"),
		new Problem("016", 1366),
		new Problem("017", 21124),
		new Problem("018", 1074),
		new Problem("019", 171),
		new Problem("020", 648),
		new Problem("021", 31626),
		new Problem("022", "871198282"),
		new Problem("024", "2783915460"),
		new Problem("025", 4782),
		new Problem("027", -59231),
		new Problem("028", "669171001"),
		new Problem("029", 9183),
		new Problem("030", 443839),
		new Problem("031", 73682),
		new Problem("032", 45228),
		new Problem("034", 40730),
		new Problem("035", 55),
		new Problem("036", 872187),
		new Problem("037", 748317),
		new Problem("039", 840),
		new Problem("040", 210),
		new Problem("041", 7652413),
		new Problem("042", 162),
		new Problem("043", "16695334890"),
		new Problem("045", "1533776805"),
		new Problem("048", "9110846700"),
		new Problem("052", 142857),
		new Problem("055", 249),
		new Problem("056", 972),
		new Problem("063", 49),
		new Problem("067", 7273),
		new Problem("081", 427337),
		new Problem("099", 709)];

var failure;
for(var i=0; i<problems.length; i++) {
    if(!runProblem(problems[i]))
	failure = true;
}

if(failure)
    console.error("\nSOME TESTS FAILED!\n");
else
    console.log("\nAll " + problems.length + " tests passed!\n");

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
	else {
	    console.log("********************************");
	    console.log("Exception in problem " + problemNumber);
	    console.log("********************************");
	    return false;
	}
    }

    return true;
}
