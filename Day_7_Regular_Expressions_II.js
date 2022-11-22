// Day 7: Regular Expressions II
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-regexp-2

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = new RegExp(/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/)
    
    /*
     * Do not remove the return statement
     */
    return re;
}

