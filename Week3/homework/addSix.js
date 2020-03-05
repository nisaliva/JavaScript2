'use strict';

const addSix = createBase(6);

function createBase(x) {
    return function sum (y){
        return x + y;
    }
};

console.log (addSix(9));
console.log (addSix(18));
console.log (addSix(30));