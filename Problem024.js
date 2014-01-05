
function george(word) {
    if(word.length===1)
	return [word];
    
    var list = [],
        startLetter,
        remainingWord,
        smallGeorge;
    for(var i=0; i<word.length; i++)
    {
	startLetter = word[i];
	remainingWord = word.replace(startLetter, "");
	smallGeorge = george(remainingWord);
	for(var j=0; j<smallGeorge.length; j++)
	{
	    list.push(startLetter + smallGeorge[j]);
	    if(list.length>=1000000)
		return list;
	}
    }
    return list;
}

var sequence = george("0123456789");
console.log("term :" + sequence[999999]);
