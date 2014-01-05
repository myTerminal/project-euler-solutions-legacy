
var weekdays = [];
weekdays.push("Sunday");
weekdays.push("Monday");
weekdays.push("Tuesday");
weekdays.push("Wednesday");
weekdays.push("Thursday");
weekdays.push("Friday");
weekdays.push("Saturday");

function getDayName(day) {
    return weekdays[day];
}

function checkIfSunday(someDate) {
    return getDayName(someDate.getDay())==="Sunday";
}

function checkIfFirstOfMonth(someDate) {
    return someDate.getDate()===1;
}

var someDate = new Date(1901, 0, 1);
var count = 0;
while(someDate.getFullYear()<2001) {
    if(checkIfFirstOfMonth(someDate) && checkIfSunday(someDate)) {
	count++;
    }
    someDate.setDate(someDate.getDate() + 1);
}

console.log("count: " + count);
