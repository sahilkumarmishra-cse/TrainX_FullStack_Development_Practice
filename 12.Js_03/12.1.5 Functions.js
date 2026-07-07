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

//Function is called a first-class citizen in JavaScript because it can be treated like any other variable. It can be assigned to variables, passed as arguments to other functions, and returned from functions. This allows for powerful programming patterns and techniques, such as callbacks, higher-order functions, and functional programming paradigms.

/*
Function can be passed in three ways 
1.Function Declaration
2.Function Expression
3.Arrow Function

example of Function Declaration:

function add(a, b) {
    return a + b;
}

add(2, 3); // Output: 5

example of Function Expression:

const multiply = function(a, b) {
    return a * b;
};

multiply(2, 3); // Output: 6

example of Arrow Function:

const divide = (a, b) => {
    return a / b;
};

divide(6, 2); // Output: 3

*/

/*

FUnction can be passed or execute in three ways
1. Function Can be assigned to a variable
2. Function Can be passed as an argument to another function
3. Function Can be returned from another function

Next Function is having Spread,rest and default parameters which are very useful in JavaScript. Let's illustrate these concepts with examples:

1. Spread Operator:
The spread operator allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.

example of Spread Operator:
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];

console.log(moreNumbers); // Output: [1, 2, 3, 4, 5]

2. Rest Parameters:
Rest parameters allow us to represent an indefinite number of arguments as an array.

example of Rest Parameters:
function sum(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15

Another example of Rest Parameters:
function multiply(multiplier, ...numbers) {
    return numbers.map(num => num * multiplier);
}
console.log(multiply(2, 1, 2, 3, 4, 5)); // Output: [2, 4, 6, 8, 10]

Another example of Rest Parameters:
function greet(greeting, ...names) {
    return `${greeting} ${names.join(', ')}`;
}
console.log(greet("Hello", "Alice", "Bob", "Charlie")); // Output: Hello Alice, Bob, Charlie

More examples of Rest Parameters:
function concatenate(separator, ...strings) {
    return strings.join(separator);
}
console.log(concatenate(" ", "Hello", "world!")); // Output: Hello world!

another example of Rest Parameters:
function findMax(...numbers) {
    return Math.max(...numbers);
}
console.log(findMax(1, 2, 3, 4, 5)); // Output: 5

similarly, we can use Rest Parameters in various scenarios where we need to handle an unknown number of arguments.

3. Default Parameters:
Default parameters allow us to initialize function parameters with default values if no value or undefined is passed.

example of Default Parameters:
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

another example of Default Parameters:
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Output: 5
console.log(multiply(5, 2)); // Output: 10

*/

/*
Return value and the Early return in the js functions

Higher Order Functions

A function that takes another function as an argument or returns a function as a result is called a higher-order function. Higher-order functions allow for more abstract and flexible programming patterns, enabling the creation of reusable and composable code.

Simply I can say that a higher-order function is a function that can takes two or more arguments or results in a function. In JavaScript, functions are first-class citizens, which means they can be treated like any other value. This allows us to pass functions as arguments to other functions or return them from functions.

Here are some examples of higher-order functions in JavaScript:

a) Function that takes another function as an argument:

example:
function greet(callback) {
    console.log("Greetings!");
    callback(); // Call the passed function
}

another example:
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

Immediate Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
2. The second part creates the immediately invoked function expression () through which the JavaScript engine will directly interpret the function.

example of IIFE:
(function() {
    console.log("This is an IIFE!");
})(); // Output: This is an IIFE!

Another example of IIFE:
const result = (function(a, b) {
    return a + b;
})(5, 10);
console.log(result); // Output: 15



*/ 