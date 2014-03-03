var runProblem = function(problemNumber) {
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
    catch(e) {
	if(e.code==="MODULE_NOT_FOUND")
	    console.log("Problem not solved yet!");
    }
};

var getPaddedProblemNumber = function (problemNumber) {
    while(problemNumber.length<3)
	problemNumber = "0" + problemNumber;
    return problemNumber;
};

var getAnswer = function (paddedProblemNumber) {
    require("./Problem" + paddedProblemNumber).run();
};

exports.runProblem = runProblem;
exports.getAnswer = getAnswer;
