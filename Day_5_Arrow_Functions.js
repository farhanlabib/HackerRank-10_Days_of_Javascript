// Day 5: Arrow Functions
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-arrows

/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    
    let modifiedNums = nums.map(num => {
        
        return (num % 2 === 0) ? num * 2 : num * 3
    });
    
    return modifiedNums
    
}

