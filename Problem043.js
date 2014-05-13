exports.run = function () {
    var listOfPandigitals,
        sum = 0,
	generatePanDigitalSeries = function (word) {
	    if (word.length === 1)
		return [word];

	    var list = [],
		startLetter,
		remainingWord,
		smallGeorge;

	    for (var i=0; i<word.length; i++) {
		startLetter = word[i];
		remainingWord = word.replace(startLetter, "");
		smallGeorge = generatePanDigitalSeries(remainingWord);

		for (var j=0; j<smallGeorge.length; j++)
		    list.push(startLetter + smallGeorge[j]);
	    }

	    return list;
	},
	testPandigital = function (term) {
	    if (+(term.substr(7, 3)) % 17)
		return false;

	    if (+(term.substr(6, 3)) % 13)
		return false;

	    if (+(term.substr(5, 3)) % 11)
		return false;

	    if (+(term.substr(4, 3)) % 7)
		return false;

	    if (+(term.substr(3, 3)) % 5)
		return false;

	    if (+(term.substr(2, 3)) % 3)
		return false;

	    if (+(term.substr(1, 3)) % 2)
		return false;

	    return true;
	};

    listOfPandigitals = generatePanDigitalSeries("9876543210");

    for (var index in listOfPandigitals)
	if (testPandigital(listOfPandigitals[index]))
	    sum += +listOfPandigitals[index];

    console.log("sum: " + sum);
    return sum;
};
