// Day 5: Template Literals
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-template-literals


/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    
    const [a,b] = expressions
    const val = Math.sqrt((b*b) - (16*a))
    
    return [(b+val)/4 , (b-val)/4].sort()
    
}

