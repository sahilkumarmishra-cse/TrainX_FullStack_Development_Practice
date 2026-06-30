// 1. Print your name on the screen

let name = "Sahil Kumar";
console.log("Name:", name);

// 2. Add two numbers and print the result

let a = 10;
let b = 20;

console.log("Sum =", a + b);


// 3. Find the larger of two numbers

let num1 = 25;
let num2 = 40;

if (num1 > num2) {
    console.log("Larger Number =", num1);
} else {
    console.log("Larger Number =", num2);
}

// 4. Check whether a number is even or odd

let number = 17;

if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

// 5. Check whether a number is positive, negative, or zero

let value = -15;

if (value > 0) {
    console.log("Positive Number");
} else if (value < 0) {
    console.log("Negative Number");
} else {
    console.log("Zero");
}

// 6. Find the largest among three numbers

let x = 50;
let y = 80;
let z = 30;

if (x >= y && x >= z) {
    console.log("Largest =", x);
} else if (y >= x && y >= z) {
    console.log("Largest =", y);
} else {
    console.log("Largest =", z);
}


// 7. Check whether a person is eligible to vote

let age = 20;

if (age >= 18) {
    console.log("Eligible to Vote");
} else {
    console.log("Not Eligible to Vote");
}

// 8. Check whether a year is a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is Not a Leap Year");
}

// 9. Print numbers from 1 to 10

console.log("Numbers from 1 to 10");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 10. Print numbers from 10 to 1

console.log("Numbers from 10 to 1");

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// 11. Print all even numbers from 1 to 100

console.log("Even Numbers from 1 to 100");

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}


// 12. Print multiplication table of a given number

let tableNum = 5;

console.log("Multiplication Table of", tableNum);

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`);
}


// 13. Find the sum of numbers from 1 to N

let N = 10;
let sum = 0;

for (let i = 1; i <= N; i++) {
    sum += i;
}

console.log("Sum from 1 to", N, "=", sum);


// 14. Find the factorial of a number

let factNum = 5;
let factorial = 1;

for (let i = 1; i <= factNum; i++) {
    factorial *= i;
}

console.log("Factorial =", factorial);


// 15. Count how many digits are in a number

let digitNumber = 987654;
let count = 0;
let temp1 = digitNumber;

while (temp1 > 0) {
    count++;
    temp1 = Math.floor(temp1 / 10);
}

console.log("Number of Digits =", count);


// 16. Reverse a number

let reverseNumber = 12345;
let reversed = 0;
let temp2 = reverseNumber;

while (temp2 > 0) {
    let digit = temp2 % 10;
    reversed = reversed * 10 + digit;
    temp2 = Math.floor(temp2 / 10);
}

console.log("Reversed Number =", reversed);

