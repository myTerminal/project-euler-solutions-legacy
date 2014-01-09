var common = require("./Common");

exports.run = function () {
    function getRouteCount(gridSize) {
	var myMemoizer = new common.MemoizerMultiInputs(countNumberOfPaths);
	return myMemoizer.getValue([gridSize, gridSize]);
    }

    var routeCounts = {};
    
    function countNumberOfPaths(gridPositionX,  gridPositionY) {
	var func = (typeof(this) === "function") ? this : countNumberOfPaths;

	if(gridPositionX==1 && gridPositionY==1)
	    return 2;

	if(gridPositionX==1)
	    return 1 + func.call(this, [gridPositionX,  gridPositionY-1]);

	if(gridPositionY==1)
	    return 1 + func.call(this, [gridPositionX-1,  gridPositionY]);

	return func.call(this, [gridPositionX-1, gridPositionY]) + func.call(this, [gridPositionX,  gridPositionY-1]);
    }

    var pathCount = getRouteCount(20);
    console.log("paths: " + pathCount);
    return pathCount;
}
