console.log(object);//Shortcut to print the object in the console is clg
debugger;
x = 30;
console.log(`Value of x is ${x}`); // Output: 30
var x = 10; // Declaration of variable x using var
console.log(`Value of x is ${x}`); // Output: 10

//Default output of a function is undefined if it does not return any value

//Note that the funnction can be passd in three ways
1. Function Declaration
2. Function Expression
3. Arrow Function

/*

Funtion can be passed or execute in three ways
1. Function Can be assigned to a variable
2. Function Can be passed as an argument to another function
3. Function Can be returned from another function

Now Give Illustration of the above three ways of passing function
Let's illustrate the three ways of passing functions in JavaScript:

1. Function Can be assigned to a variable:
Let name = function() {
    console.log("Hello, I am a function assigned to a variable!");
}
    Given above, we have assigned an anonymous function to the variable 'name'. We can call this function using the variable name:
name(); // Output: Hello, I am a function assigned to a variable!

2. Function Can be passed as an argument to another function:
function greet(callback) {
    console.log("Greetings!");
    callback(); // Call the passed function
}
const callback = function() {
    console.log("Hello, I am a function assigned to a variable!");
};
greet(callback); // Output: Greetings! followed by Hello, I am a function assigned to a variable!

3. Function Can be returned from another function:
function createGreeting() {
    return function() {
        console.log("Hello, I am a function returned from another function!");
    };
}
const greeting = createGreeting();
greeting(); // Output: Hello, I am a function returned from another function!

*/