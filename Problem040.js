exports.run = function () {
    var limit = 1000000,
        fract = "",
        output = 1;

    for(i=1; fract.length<limit; i++)
	fract += i.toString();

    for(i=1; i<=1000000; i*=10)
	output *= (+fract[i-1]);
    
    console.log("output: " + output);
    return output;
}
