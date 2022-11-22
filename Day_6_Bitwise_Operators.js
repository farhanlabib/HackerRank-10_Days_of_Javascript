// Day 6: Bitwise Operators
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-bitwise

function getMaxLessThanK(n, k){
    let maxVal = 0
    for(let i = 1; i <= n; i++){
        for (let j = i+1; j <= n; j++){
            let val = i & j
            if ((maxVal < val) && (val<k)){
                maxVal = val
            }
        }
    }
    return maxVal
}

