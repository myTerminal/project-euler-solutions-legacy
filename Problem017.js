exports.run = function () {
    function getWordRepresentation(number) {
	return getThousandsRep(number);
    }

    function getThousandsRep(number) {
	var thousandsPlace = getThousandsPlace(number),
            hundredsRep = getHundredsRep(number),
            andSeparator = hundredsRep ? "and " : "";
	switch (thousandsPlace) {
        case 0: return "" + getHundredsRep(number);
            break;
        case 1: return "one thousand " + getHundredsRep(number);
            break;
        case 2: return "two thousand " + getHundredsRep(number);
            break;
        case 3: return "three thousand " + getHundredsRep(number);
            break;
        case 4: return "four thousand " + getHundredsRep(number);
            break;
        case 5: return "five thousand " + getHundredsRep(number);
            break;
        case 6: return "six thousand " + getHundredsRep(number);
            break;
        case 7: return "seven thousand " + getHundredsRep(number);
            break;
        case 8: return "eight thousand " + getHundredsRep(number);
            break;
        case 9: return "nine thousand " + getHundredsRep(number);
            break;
	}
    }

    function getHundredsRep(number) {
	var hundredsPlace = getHundredsPlace(number),
            tensRep = getTensRep(number),
            andSeparator = tensRep ? "and " : "";
	switch (hundredsPlace) {
        case 0: return "" + getTensRep(number);
            break;
        case 1: return "one hundred " + andSeparator + tensRep;
            break;
        case 2: return "two hundred " + andSeparator + tensRep;
            break;
        case 3: return "three hundred " + andSeparator + tensRep;
            break;
        case 4: return "four hundred " + andSeparator + tensRep;
            break;
        case 5: return "five hundred " + andSeparator + tensRep;
            break;
        case 6: return "six hundred " + andSeparator + tensRep;
            break;
        case 7: return "seven hundred " + andSeparator + tensRep;
            break;
        case 8: return "eight hundred " + andSeparator + tensRep;
            break;
        case 9: return "nine hundred " + andSeparator + tensRep;
            break;
	}
    }

    function getTensRep(number) {
	var tensPlace = getTensPlace(number);
	switch (tensPlace) {
        case 0: return getUnitsRep(number);
            break;
        case 1:
            var unitsPlace = getUnitsPlace(number);
            switch (unitsPlace) {
            case 0: return "ten";
                break;
            case 1: return "eleven";
                break;
            case 2: return "twelve";
                break;
            case 3: return "thirteen";
                break;
            case 4: return "fourteen";
                break;
            case 5: return "fifteen";
                break;
            case 6: return "sixteen";
                break;
            case 7: return "seventeen";
                break;
            case 8: return "eighteen";
                break;
            case 9: return "nineteen";
                break;
            }
            break;
        case 2: return "twenty " + getUnitsRep(number);
            break;
        case 3: return "thirty " + getUnitsRep(number);
            break;
        case 4: return "forty " + getUnitsRep(number);
            break;
        case 5: return "fifty " + getUnitsRep(number);
            break;
        case 6: return "sixty " + getUnitsRep(number);
            break;
        case 7: return "seventy " + getUnitsRep(number);
            break;
        case 8: return "eighty " + getUnitsRep(number);
            break;
        case 9: return "ninety " + getUnitsRep(number);
            break;
	}
    }

    function getUnitsRep(number) {
	var unitsPlace = getUnitsPlace(number);
	switch (unitsPlace) {
        case 0: return "";
            break;
        case 1: return "one";
            break;
        case 2: return "two";
            break;
        case 3: return "three";
            break;
        case 4: return "four";
            break;
        case 5: return "five";
            break;
        case 6: return "six";
            break;
        case 7: return "seven";
            break;
        case 8: return "eight";
            break;
        case 9: return "nine";
            break;
	}
    }

    function getUnitsPlace(number) {
	return number % 10;
    }

    function getTensPlace(number) {
	return getUnitsPlace((number - getUnitsPlace(number)) / 10);
    }

    function getHundredsPlace(number) {
	return getTensPlace((number - getUnitsPlace(number)) / 10);
    }

    function getThousandsPlace(number) {
	return getHundredsPlace((number - getUnitsPlace(number)) / 10);
    }

    var sum = 0;
    for(i=1; i<=1000; i++) {
	var word = getWordRepresentation(i).replace(/ /g,"");
	sum += word.length;
    }
    console.log("Sum of letters: " + sum);
    return sum;
}
