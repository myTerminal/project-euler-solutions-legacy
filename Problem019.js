exports.run = function () {
    var weekdays = [],
	someDate = new Date(1901, 0, 1),
        count = 0,
	getDayName = function (day) {
	    return weekdays[day];
	},
	checkIfSunday = function (someDate) {
	    return getDayName(someDate.getDay()) === "Sunday";
	},
	checkIfFirstOfMonth = function (someDate) {
	    return someDate.getDate() === 1;
	};

    weekdays.push("Sunday");
    weekdays.push("Monday");
    weekdays.push("Tuesday");
    weekdays.push("Wednesday");
    weekdays.push("Thursday");
    weekdays.push("Friday");
    weekdays.push("Saturday");
    
    while (someDate.getFullYear() < 2001) {
	if (checkIfFirstOfMonth(someDate) && checkIfSunday(someDate))
	    count++;

	someDate.setDate(someDate.getDate() + 1);
    }

    console.log("count: " + count);
    return count;
};
