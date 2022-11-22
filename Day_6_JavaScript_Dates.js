// Day 6: JavaScript Dates
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-date



// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let date = new Date(dateString);
    dayName = days[date.getDay()];
    return dayName;
}

