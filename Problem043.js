exports.run = function () {
    var listOfPandigitals,
        sum = 0;

    function generatePanDigitalSeries(word) {
	if(word.length===1)
	    return [word];
	var list = [],
            startLetter,
            remainingWord,
            smallGeorge;
	for(var i=0; i<word.length; i++) {
	    startLetter = word[i];
	    remainingWord = word.replace(startLetter, "");
	    smallGeorge = generatePanDigitalSeries(remainingWord);
	    for(var j=0; j<smallGeorge.length; j++)
		list.push(startLetter + smallGeorge[j]);
	}
	return list;
    }

    function testPandigital(term) {
	if(toInt(term.substr(7, 3))%17 != 0)
	    return false;
	if(toInt(term.substr(6, 3))%13 != 0)
	    return false;
	if(toInt(term.substr(5, 3))%11 != 0)
	    return false;
	if(toInt(term.substr(4, 3))%7 != 0)
	    return false;
	if(toInt(term.substr(3, 3))%5 != 0)
	    return false;
	if(toInt(term.substr(2, 3))%3 != 0)
	    return false;
	if(toInt(term.substr(1, 3))%2 != 0)
	    return false;
	return true;
    }

    function toInt(stringer) {
	return parseInt(stringer, 10);
    }

    listOfPandigitals = generatePanDigitalSeries("9876543210");

    for(index in listOfPandigitals)
	if(testPandigital(listOfPandigitals[index]))
	    sum += toInt(listOfPandigitals[index]);

    console.log("sum: " + sum);
    return sum;
}
