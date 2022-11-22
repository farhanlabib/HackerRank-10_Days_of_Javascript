// Day 2: Loops
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-loops

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowels=[]
    let constant=[]
    for(var i=0; i<s.length ; i++) {
        if((s[i]=='a')||(s[i]=='e')||(s[i]=='i')||(s[i]=='o')||(s[i]=='u')){
            vowels.push(s[i])
        } else {
            constant.push(s[i]);
        }
    }
    let concatArr = [...vowels, ...constant];
    for (let i of concatArr) {
        console.log(i);
    }
    
}