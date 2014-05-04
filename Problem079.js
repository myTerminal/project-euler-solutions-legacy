exports.run = function () {
    var keylog = ["319", "680", "180", "690", "129", "620", "762", "689", "762",
		  "318", "368", "710", "720", "710", "629", "168", "160", "689",
		  "716", "731", "736", "729", "316", "729", "729", "710", "769",
		  "290", "719", "680", "318", "389", "162", "289", "162", "718",
		  "729", "319", "790", "680", "890", "362", "319", "760", "316",
		  "729", "380", "319", "728", "716"],
	characterRelWeights = [],
	characterOccurances = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	characterAbsWeights = [],
	keyCode = "",
	extractWeights = function (key) {
	    for(var i=0, character; i<key.length; i++) {
		character = +key[i];
		addToRelativeWeights(character, i+1);
	    }
	},
	addToRelativeWeights = function (character, weight) {
	    characterRelWeights[character] = (characterRelWeights[character] ? 
					      characterRelWeights[character] : 
					      0) + weight;
	    characterOccurances[character] += 1;
	},
	getMinFromArray = function (array) {
	    return Math.min.apply(Math.min, array);
	},
	getPositionOfMin = function (array) {
	    var min = getMinFromArray(array);
	    return array.indexOf(min);
	};

    for(var i=0; i<keylog.length; i++)
	extractWeights(keylog[i]);

    for(var i=0; i<characterRelWeights.length; i++)
	characterAbsWeights.push(
	    Math.round(characterRelWeights[i] * 10 /characterOccurances[i]));

    for(var i=0; i<characterRelWeights.length; i++)
	if(isNaN(characterAbsWeights[i]))
	    characterAbsWeights[i] = 100;

    for(var i=0; i<characterAbsWeights.length; i++) {
	if(getMinFromArray(characterAbsWeights) == 100)
	    break;
	keyCode = keyCode + getPositionOfMin(characterAbsWeights);
	characterAbsWeights[getPositionOfMin(characterAbsWeights)] = 100;
    }
    
    console.log("keyCode: " + keyCode);
    return keyCode;
};
