var name = 'John';
var age = 30;
var isStudent = false;

//Hosting: Variables declared with var are hoisted to the top of their scope. This means that the variable declarations are processed before any code is executed, but the assignments are not hoisted.

//declaration
var city;
//Assignment
city = 'New York';
//redeclaration
var city = 'Los Angeles';
//reassignment
city = 'Chicago';
//In the case of using let or const, the variable is not hoisted in the same way. They are hoisted to the top of their block scope, but they are not initialized until the code execution reaches their declaration. This means that if you try to access a let or const variable before its declaration, you will get a ReferenceError.
//In the case of using let we cannot redeclare and reassign the variable in the same scope. However, we can reassign the variable in a different scope. For example:
let country = 'USA';
let country = 'Canada'; // This will throw an error because we cannot redeclare a variable in the same scope.

//Variables declare with var keyword are function-scoped, while variables declared with let and const are block-scoped. This means that var variables are accessible throughout the entire function in which they are declared, while let and const variables are only accessible within the block (e.g., a loop or an if statement) in which they are declared.

//Hosting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, it's important to note that only the declarations are hoisted, not the initializations.

//In the case of using var, the variable is hoisted to the top of its function scope, and it is initialized with undefined. This means that if you try to access a var variable before its declaration, you will get undefined instead of a ReferenceError. For example:
console.log(myVar);
var myVar = 'Hello, World!'; // Output: undefined
//undefined is the default value assigned to a variable that has been declared but not yet initialized. In the case of using let or const, the variable is hoisted to the top of its block scope, but it is not initialized until the code execution reaches its declaration. This means that if you try to access a let or const variable before its declaration, you will get a ReferenceError. For example:
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 'Hello, World!';
console.log(myLetVar); // Output: Hello, World!

//Hosting GECS (Global Execution Context Stack) is a mechanism in JavaScript that manages the execution of code. It consists of two main components: the Global Execution Context (GEC) and the Execution Context Stack (ECS). The GEC is created when the JavaScript engine starts executing the code, and it contains information about the global scope, including variables, functions, and objects. The ECS is a stack data structure that keeps track of the execution contexts as they are created and destroyed during the execution of the code. When a function is called, a new execution context is created and pushed onto the stack, and when the function returns, its execution context is popped off the stack. This allows JavaScript to manage the flow of execution and maintain the correct scope for variables and functions.


//expalin this all with defination and examples

Sure! Let's break down the concepts of variables, hoisting, and execution context in JavaScript with definitions and examples.

### 1. Variables in JavaScript
Variables are used to store data values in JavaScript. There are three main ways to declare variables: `var`, `let`, and `const`.

- **`var`**: Declares a variable that is function-scoped. It can be redeclared and reassigned within the same scope.also it is global scoped if declared outside a function.

- **`let`**: Declares a variable that is block-scoped. It can be reassigned but not redeclared within the same scope.

- **`const`**: Declares a variable that is block-scoped and immutable. It must be initialized at the time of declaration and cannot be reassigned.
```javascript
var name = 'John';
let age = 30;
const isStudent = false;
```
### 2. Hoisting/
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.

//Undefined is th special kind of value that is assigned to a variable that has been declared but not yet initialized. In the case of using `let` or `const`, the variable is hoisted to the top of its block scope, but it is not initialized until the code execution reaches its declaration. This means that if you try to access a `let` or `const` variable before its declaration, you will get a ReferenceError.

//in the case of the `var` keyword, the variable is hoisted to the top of its function scope, and it is initialized with `undefined`. This means that if you try to access a `var` variable before its declaration, you will get `undefined` instead of a ReferenceError.

```javascript
console.log(myVar); // undefined
var myVar;
console.log(myVar); // undefined
```
//In the case of using `let` or `const`, if you try to access a variable before its declaration, you will get a ReferenceError.
```javascript
console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = 'Hello, World!';
console.log(myLetVar); // Output: Hello, World!
```
### 3. Execution Context
The Execution Context is a concept in JavaScript that refers to the environment in which the code is executed. It consists of two main components: the Global Execution Context (GEC) and the Execution Context Stack (ECS).

//By defalt value of the let variable and const variable is undefined.

//by deafault value of the var variable is undefined.

//Assignment of the multiple value of const variable is not allowed and it will throw error - Type error

//If the function declared inside the block but called outside the block like in the let and const then it will throw error -type error

//Pascal Case - AddTwoNumber....  Classes,Function in java mostly
//Camel Case -addTwoNumber.... func,variables
//Const_value - Maxstudent
//kable case - Add_Two_Number Used in the Python

//Null is special type of data known as object data type which is considered as the historical bug.

//Type coercion is related to the typecating and type conversion

//string concatenation and replication

//NAN primitive datatype
//difference between the Null and NAN




