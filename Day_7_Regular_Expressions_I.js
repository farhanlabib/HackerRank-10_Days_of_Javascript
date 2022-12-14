// Day 7: Regular Expressions II
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-regexp-1

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = new RegExp('^[a].*[a]$|^[e].*[e]$|^[i].*[i]$|^[o].*[o]$|^[u].*[u]$', 'g');
    
    /*
     * Do not remove the return statement
     */
    return re;
}



