'use strict';

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(arr) {
    let newArr = [];
    // map() creates a new array with the results of the function for every array element.
    arr.map(x => {
        // this checks if the array doesn't include x,it adds this one to newArr.
        if (!newArr.includes(x)) {
            newArr.push(x)
        }
    });
    return newArr
};

console.log(removeDuplicates(letters));

// OR

function removeDuplicateLetters(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicateLetters(letters));