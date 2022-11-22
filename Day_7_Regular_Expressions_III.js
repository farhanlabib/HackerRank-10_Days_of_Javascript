// Day 7: Regular Expressions III
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-regexp-3

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
    
    const re = new RegExp(/[0-9]+/gm)
    
    /*
     * Do not remove the return statement
     */
    return re;
}



