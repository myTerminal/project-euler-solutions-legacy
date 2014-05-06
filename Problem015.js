var common = require("./Common");

exports.run = function () {
    var routeCounts = {},
	getRouteCount = function (gridSize) {
	    var myMemoizer = new common.MemoizerMultiInputs(countNumberOfPaths);
	    return myMemoizer.getValue([gridSize, gridSize]);
	},
	countNumberOfPaths = function (gridPositionX, gridPositionY) {
	    var func = (typeof(this) === "function") 
		    ? this 
		    : countNumberOfPaths;

	    if (gridPositionX==1 && gridPositionY==1)
		return 2;

	    if (gridPositionX==1)
		return 1 + func.call(this, 
				     [gridPositionX,  gridPositionY-1]);

	    if (gridPositionY==1)
		return 1 + func.call(this,
				     [gridPositionX-1,  gridPositionY]);

	    return func.call(this, [gridPositionX-1, gridPositionY]) 
		+ func.call(this, [gridPositionX,  gridPositionY-1]);
	},
	pathCount = getRouteCount(20);

    console.log("paths: " + pathCount);
    return pathCount;
};
