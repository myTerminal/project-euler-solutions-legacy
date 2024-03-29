exports.run = function () {
    var lastPanDigitalSequence,
        panDigitals,
        number,
        getLastPanDigitalNumber = function (numberOfDigits) {
            for (var i=numberOfDigits, stringNumber=""; i>0; i--)
                stringNumber = stringNumber + i.toString();

            return stringNumber;
        },
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
        isPandigitalSeriesComposite = function (sequence) {
            return isDivisibleByThree(sequence);
        },
        isSuspectedComposite = function (number) {
            var endsWithSuspicious = function (number) {
                var list = [0, 2, 4, 5, 6, 8],
                    isSuspicious,
                    stringNumber = number.toString(),
                    lastDigit = stringNumber.substr(stringNumber.length-1);

                for (var i=0; i<list.length && !isSuspicious; i++)
                    isSuspicious = lastDigit==list[i];

                return isSuspicious;
            };
            
            return endsWithSuspicious(number) || isDivisibleByThree(number);
        },
        isDivisibleByThree = function (number) {
            var stringNumber = number.toString(),
                sum = 0;

            for (var i=0; i<stringNumber.length; i++)
                sum += +(stringNumber[i]);

            return sum%3 == 0;
        },
        isPrime = function (number) {
            for (var i=2, isComposite; i<number/2 && !isComposite; i++)
                isComposite = (number%i==0);

            return !isComposite;
        };

    for (var i=9; i>1 && !number; i--) {
        lastPanDigitalSequence = getLastPanDigitalNumber(i);

        if (!isPandigitalSeriesComposite(lastPanDigitalSequence)) {
            panDigitals = generatePanDigitalSeries(lastPanDigitalSequence);
            number=0;

            for (i=0; i<panDigitals.length && !number; i++)
                if (!isSuspectedComposite(panDigitals[i]) 
                    && isPrime(panDigitals[i]))
                    number = panDigitals[i];
        }
    }
    
    console.log("largest prime: " + number);
    return number;
};
