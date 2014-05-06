var addBigNumbers = function (number1, number2) {
    var addLastDigit = function (number1, number2, carry) {
        var number1LSD = number1 
		? +(number1.substr(number1.length - 1, 1)) 
		: 0,
            number2LSD = number2 
		? +(number2.substr(number2.length - 1, 1)) 
		: 0,
            result = getSum(number1LSD, number2LSD, carry),
            newCarry = getCarry(number1LSD, number2LSD, carry);
	
        return !number1 && !number2 
	    ? (carry || "") 
	    : addLastDigit(number1.substr(0, number1.length - 1),
			   number2.substr(0, number2.length - 1),
			   newCarry) + result;
    },
	getSum = function (a, b, c) {
	    var d = (a + b + c).toString();
	    return (d.length > 1) 
		? d[1] 
		: d;
	},
	getCarry = function (a, b, c) {
	    var d = (a + b + c).toString();
	    return (d.length > 1) 
		? +(d[0]) 
		: 0;
	};

    return addLastDigit(number1, number2, 0);
}; 

var scaleBigNumber = function (number, scale) {
    var scaledNumber = "0";

    if (!scale)
	return "0";

    for (var i=0; i<scale; i++)
	scaledNumber = addBigNumbers(scaledNumber, number);

    return scaledNumber;
};

var multiplyBigNumbers = function (number1, number2) {
    var finalResult = "0",
        zeroPaddingLength,
        currentScale,
	currentDigit,
	getZeroPaddings = function (count) {
	    var padding = "";

	    for (var i=0; i<count; i++)
		padding = padding + "0";

	    return padding;
	};
    
    for (var i=number2.length-1; i>=0; i--) {
	currentDigit = +(number2.substr(i, 1));
	zeroPaddingLength = (number2.length-1)-i;
	currentScale = scaleBigNumber(number1, currentDigit);
	finalResult = addBigNumbers(finalResult, currentScale 
				    + getZeroPaddings(zeroPaddingLength));
    }

    return finalResult;
};

var raiseBigNumber = function (number, power) {
    var raisedNumber = "1";

    if (!power)
	return "1";
    
    for (var i=0; i<power; i++)
	raisedNumber = multiplyBigNumbers(raisedNumber, number);

    return raisedNumber;
};

var fibonacci = function (term) {
    return (term==1 || term==2) 
	? 1 
	: fibonacci(term-1) + fibonacci(term-2);
};

var fibonacciMemoizable = function (term) {
    var func = (typeof(this) === "function") 
	    ? this 
	    : fibonacciMemoizable;

    return (term == 1 || term == 2) 
	? 1 
	: func.call(this, term-1) + func.call(this, term-2);
};

var fibonacciMemoizableBig = function (term) {
    var func = (typeof(this) === "function") 
	    ? this 
	    : fibonacciMemoizableBig;

    return (term == 1 || term == 2) 
	? "1" 
	: addBigNumbers(func.call(this, term-1), func.call(this, term-2));
};

var factorial = function (term) {
    return (term < 2) 
	? 1 
	: term * factorial(term-1);
};

var factorialMemoizable = function (term) {
    var func = (typeof(this) === "function") 
	    ? this 
	    : factorialMemoizable;

    return (term < 1) 
	? 1 
	: term * func.call(this, term-1);
};

var Memoizer = function (func) {
    var lookUp = [],
	getValue = function (input) {
	    if (lookUp[input])
		return lookUp[input];
	    
	    var value = func.call(getValue, input);
	    lookUp[input] = value;
	    
	    return value;
	};

    return {
	getValue: getValue
    };
};

var MemoizerMultiInputs = function (func) {
    var lookUp = {},
	getValue = function (inputs) {
	    var inputsInString = inputs.join("_");
	    
	    if (lookUp[inputsInString])
		return lookUp[inputsInString];
	    
	    var value = func.apply(getValue, inputs);
	    lookUp[inputsInString] = value;
	    
	    return value;
	};

    return {
	getValue: getValue
    };
};

var getPrimesBelowNumber = function (limit) {
    var numbers = [];

    for (var i=0; i<limit; i++)
	numbers.push(i);
    
    numbers[1] = 0;

    for (var i=2; i<limit; i++)
	for (var j=i*i; j<limit; j=j+i)
            if (j%i===0)
		numbers[j]=0;

    return numbers;
};

// ------------------- Exports ----------------------

exports.addBigNumbers = addBigNumbers;
exports.scaleBigNumber = scaleBigNumber;
exports.multiplyBigNumbers = multiplyBigNumbers;
exports.raiseBigNumber = raiseBigNumber;

exports.factorial = factorial;
exports.factorialMemoizable = factorialMemoizable;

exports.fibonacci = fibonacci;
exports.fibonacciMemoizable = fibonacciMemoizable;
exports.fibonacciMemoizableBig = fibonacciMemoizableBig;

exports.Memoizer = Memoizer;
exports.MemoizerMultiInputs = MemoizerMultiInputs;

exports.getPrimesBelowNumber = getPrimesBelowNumber;
