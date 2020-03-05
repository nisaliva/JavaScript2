'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    for (let i = startIndex; i <= stopIndex; i++) {
        numbers.push(i);
    }
    threeCallback(numbers);
    fiveCallback(numbers);
   
//   using this you can see which numbers are in the array.
  return `The numbers in the list are ${numbers.join(', ')}.`;
}

function sayThree(arr) {
      
    const divThree = arr.filter(elem => elem % 3 == 0)
    console.log(`The number(s) ${divThree.join(', ')} is/are divisible by 3.`);
};

function sayFive(arr) {  
    const divFive = arr.filter(elem => elem % 5 == 0)
    console.log(`The number(s) ${divFive.join(', ')} is/are divisible by 5.`);

    const divthreeFive = arr.filter(elem => elem % 15 == 0) 
    console.log(`The number(s) ${divthreeFive.join(', ')} is/are divisible by 15.`);
};

console.log(threeFive(10, 15, sayThree, sayFive));
