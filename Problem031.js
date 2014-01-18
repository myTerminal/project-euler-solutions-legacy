exports.run = function () {
    var denominations = [1, 2, 5, 10, 20, 50, 100, 200],
        limit = 200,
    	count = 0;

    function getCombinations(limit, denominations) {
	var count = 0,
	    currentCoin;

	if(limit==0)
	    return 1;
	if(denominations.length<=0)
	    return 0;

	currentCoin = denominations.pop();
	for(var i=0; currentCoin*i<=limit; i++)
	    count += getCombinations(limit-currentCoin*i, denominations.slice(0));
	return count;
    }

    count = getCombinations(limit, denominations);
    console.log("count: " + count);
    return count;
};
