// Day 4: Classes
// Overview: 10 Days of JavaScript
// https://www.hackerrank.com/challenges/js10-class

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon{
    constructor(args){
        this.values = args
    }
    perimeter(){
        let count = 0
        this.values.forEach(num => count = count+num )
        return count
    }
 }

