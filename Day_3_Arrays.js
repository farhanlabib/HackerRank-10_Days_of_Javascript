// Day 3: Arrays
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-arrays

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    let temp = 0;
    let maxNumber = Math.max(...nums)
    nums = nums.filter(value => value !== maxNumber);
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>temp){
            temp = nums[i]
        }
    }
    //console.log(temp)
    return temp;
}