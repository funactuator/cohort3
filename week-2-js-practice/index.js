// C1 Normal Functions
// C2 Synchronous code and Asynchronous code
// C3 I/O Heavy, I/O Bound tasks, CPU Bound Tasks
// T1. Read from a file

const fs = require("fs");

const data = fs.readFileSync("a.txt", "utf-8");
console.log(data);

//  I got an issue here, I was not in correct folder and I tried running and it gave error


// T2. Read from two files
// T3 . Read from 3 files synchronously
// T4. Read 1 file synchronous, other asynchronous


// C4 Functional Arguments

//Calculator Functional Arguments
function sum(a,b){
    return a+b;
}

function subtract(a,b){
    return a+b;
}

function divide(a, b){
    return a/b;
}

function multiply(a,b){
    return a*b;
}

function doOperation(a,b, op){
    console.log(op(a,b));
}

doOperation(2, 3, sum);

// C5: Asynchronous Code, Callbacks

// T5 Read two file asynchronously

console.log("---------------T5--------------");
function print(err, data){
    console.log(data);
}

fs.readFile("a.txt", "utf-8", print);
fs.readFile("b.txt", "utf-8", print);

console.log("DONE");


// HW
// Write Promisified version of
// 1. readFile
// 2. fetch
// 3. Timeout

// Write synchronous setTimeout , Kirat explained it pretty well
// Using infinite well

// What makes a function asynchronous