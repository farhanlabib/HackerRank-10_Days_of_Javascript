// Day 3: Throw
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-throw

/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if (a > 0){
        return "YES"
    }
    else if (a === 0){
        throw { message: 'Zero Error' }
    }
    else
        throw { message: 'Negative Error' }
}