// Day 1: Functions
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-function/

/*
 * Create the function factorial here
 */ 

function factorial(n){
    let temp = 1
    for(let i = 1; i<=n; i++){
        temp = temp*i
    }
    return temp;
}