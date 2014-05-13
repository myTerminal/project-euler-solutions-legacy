exports.run = function () {
    var term,
	george = function (word) {
	    if(word.length === 1)
		return [word];
	    
	    var list = [],
		startLetter,
		remainingWord,
		smallGeorge;

	    for (var i=0; i<word.length; i++) {
		startLetter = word[i];
		remainingWord = word.replace(startLetter, "");
		smallGeorge = george(remainingWord);

		for (var j=0; j<smallGeorge.length; j++) {
		    list.push(startLetter + smallGeorge[j]);

		    if(list.length >= 1000000)
			return list;
		}
	    }

	    return list;
	},
	sequence = george("0123456789");

    term = sequence[999999];
    console.log("term :" + term);
    return term;
};
