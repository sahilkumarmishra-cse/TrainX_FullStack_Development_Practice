debugger;
console.log("Global Execution Context starts");

var globalVariable = "I am a global variable";

console.log(globalVariable); // Output: I am a global variable
console.log(greet());
greet(); // Output: I am a global function

console.log("Global Execution Context ends");

//function declaration
function greet() {
    var name = "John";
    console.log("Inside Global Function");
    return 900;//by deafault return undefined if no return statement is provided but if there is a return statement then it will return the value specified in the return statement 
}