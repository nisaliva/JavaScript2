// Snippet
const x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);
// output is: 9;
// f1() function uses x value as 9 and increases the value 1.Then it's return val will be 10.
// So if you log this function to the console, result is 10.
// But if you log x to the console, you are going to see 9. Because x value doesn't change.
// Although it is used by the function, x is defined outside of the function.In this way its value remains the same.

const y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);
// output is: {x:10};
// f2() function uses y value as {x:9} and this is an object. 
// and increases the value of x of the object with 1 and returns it.
// so here the object is parameter of the function and function increases the 9 to 10,
// If you log it to the console, you are going to see this object(x: 10). 