'use script';
// // Snippet
let a = 10;
const x = (function() {
    a = 12;

    return function() {
        alert(a);
    };
})(); 
x(); 
// (output is undefined) the function (x) returns undefined because the value was not returned.
// (output is 12) alert(a);

// In the global scope we have let a variable which has the value 10. 
// Inside of the outer function, the value of a is reassined and it is 12 now.
// And we are defining another closure fuction which is going to alert us the value 12.
// This is because the closure function can access the outer function's variable.
