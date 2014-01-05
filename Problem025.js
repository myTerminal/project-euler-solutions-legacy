var common = require("./Common");

var myFunc = new common.Memoizer(common.fibonacciMemoizableBig),
    number,
    fib,
    i=0;
while(!number)
{
    i++;
    fib = myFunc.getValue(i);
    if(fib.length >= 1000)
	number = i;
}
console.log("number :" + number);
console.log("fibonacci :" + fib);
