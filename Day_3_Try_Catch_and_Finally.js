// Day 3: Try, Catch, and Finally
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-try-catch-and-finally

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        s = s.split("").reverse().join("")
        //console.log(s)
    }
        catch(e){
        console.log("s.split is not a function")
    }
    
    console.log(s)
}