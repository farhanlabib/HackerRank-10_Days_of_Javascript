// Day 4: Create a Rectangle Object
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-objects

/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
    
    let obj = {
        length: a,
        width: b,
        perimeter: 2*(a+b),
        area: a*b
    }
    
    return obj;
    
}

