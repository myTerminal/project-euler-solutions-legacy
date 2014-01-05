addBigNumbers = function addBigNumbers(number1, number2) {
    function addLastDigit(number1, number2, carry) {
        var number1LSD = number1 ? parseInt(number1.substr(number1.length - 1, 1)) : 0,
            number2LSD = number2 ? parseInt(number2.substr(number2.length - 1, 1)) : 0,
            result = getSum(number1LSD, number2LSD, carry),
            newCarry = getCarry(number1LSD, number2LSD, carry);

        return !number1 && !number2 ?
            (carry || "") :
            addLastDigit(number1.substr(0, number1.length - 1),
                number2.substr(0, number2.length - 1),
                newCarry) + result;
    }

    function getSum(a, b, c) {
        var d = (a + b + c).toString();
        return (d.length > 1) ? d[1] : d;
    }

    function getCarry(a, b, c) {
        var d = (a + b + c).toString();
        return (d.length > 1) ? parseInt(d[0]) : 0;
    }

    return addLastDigit(number1, number2, 0);
};

scaleBigNumber = function scaleBigNumber(number, scale) {
    if(!scale)
	return "0";
    var scaledNumber = "0";
    for(var i=0; i<scale; i++)
	scaledNumber = addBigNumbers(scaledNumber, number);
    return scaledNumber;
};

multiplyBigNumbers = function multiplyBigNumbers(number1, number2) {
    var finalResult = "0",
        zeroPaddingLength,
        currentScale;
    for(var i=number2.length-1; i>=0; i--) {
	currentDigit = parseInt(number2.substr(i, 1));
	zeroPaddingLength = (number2.length-1)-i;
	currentScale = scaleBigNumber(number1, currentDigit);
	finalResult = addBigNumbers(finalResult, currentScale + getZeroPaddings(zeroPaddingLength));
    }
    
    function getZeroPaddings(count) {
	var padding = "";
	for(var i=0; i<count; i++)
	    padding = padding + "0";
	return padding;
    }

    return finalResult;
};

raiseBigNumber = function raiseBigNumber(number, power) {
    if(!power)
	return "1";
    var raisedNumber = "1";
    for(var i=0; i<power; i++)
	raisedNumber = multiplyBigNumbers(raisedNumber, number);
    return raisedNumber;
};

fibonacci = function fibonacci(term) {
    return (term==1 || term==2) ? 1 : fibonacci(term-1) + fibonacci(term-2);
};

fibonacciMemoizable = function fibonacciMemoizable(term) {
    var func = (typeof(this) === "function") ? this : fibonacciMemoizable;
    return (term==1 || term==2) ? 1 : func.call(this, term-1) + func.call(this, term-2);
};

fibonacciMemoizableBig = function fibonacciMemoizableBig(term) {
    var func = (typeof(this) === "function") ? this : fibonacciMemoizableBig;
    return (term==1 || term==2) ? "1" : addBigNumbers(func.call(this, term-1), func.call(this, term-2));
};

Memoizer = function Memoizer(func) {
    var lookUp = [];

    var getValue = function (input) {
	if(lookUp[input])
	    return lookUp[input];
	var value = func.call(getValue, input);
	lookUp[input] = value;
	return value;
    };

    return {
	getValue: getValue
    };
};

// ------------------- Exports ----------------------

exports.addBigNumbers = addBigNumbers;
exports.scaleBigNumber = scaleBigNumber;
exports.multiplyBigNumbers = multiplyBigNumbers;
exports.raiseBigNumber = raiseBigNumber;

exports.fibonacci = fibonacci;
exports.fibonacciMemoizable = fibonacciMemoizable;
exports.fibonacciMemoizableBig = fibonacciMemoizableBig;

exports.Memoizer = Memoizer;
