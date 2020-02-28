'use strict'

const myNumbers = [1, 2, 3, 4];

//this selects only event numbers
const evenNumbers = myNumbers.filter (x => x % 2 === 0);
console.log (evenNumbers);

//this converts even numbers to double
const doubleEvenNumbers = evenNumbers.map (x => x * 2);
console.log (doubleEvenNumbers);