import { Topic } from '../types/Topic';

export const topics: Topic[] = [
  {
    id: 'variables',
    title: 'Variables & Data Types',
    description: 'Learn about declaring variables and understanding different data types in JavaScript',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    content: 'JavaScript variables are containers for storing data values. Modern JavaScript provides three ways to declare variables: var, let, and const. Each has its own scope and use cases. Understanding data types is crucial for writing effective JavaScript code.',
    example: `// Variable declarations with different types
let name = "John";           // String type
const age = 25;             // Number type
var isStudent = true;       // Boolean type

// More complex data types
let numbers = [1, 2, 3];    // Array
let person = {              // Object
  name: "John",
  age: 25,
  isStudent: true
};

// Variable scoping
if (true) {
  let blockScoped = "Only available inside this block";
  var functionScoped = "Available throughout the function";
  const constant = "Cannot be reassigned";
}

// Type conversion
let numStr = "42";
let num = Number(numStr);    // String to Number
let str = String(num);      // Number to String
let bool = Boolean(num);    // Number to Boolean`
  },
  {
    id: 'operators',
    title: 'Operators & Control Flow',
    description: 'Master JavaScript operators and control flow statements',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    content: 'JavaScript provides various operators for performing operations on values, and control flow statements to control the execution flow of your program.',
    example: `// Arithmetic Operators
let sum = 5 + 3;          // Addition
let difference = 10 - 4;   // Subtraction
let product = 6 * 2;      // Multiplication
let quotient = 15 / 3;    // Division
let remainder = 17 % 5;   // Modulus

// Comparison Operators
let isEqual = 5 === "5";     // Strict equality (false)
let isLooseEqual = 5 == "5"; // Loose equality (true)
let isGreater = 10 > 5;      // Greater than
let isLessOrEqual = 7 <= 7;  // Less than or equal

// Logical Operators
let and = true && false;     // Logical AND
let or = true || false;      // Logical OR
let not = !true;             // Logical NOT

// Control Flow
if (age >= 18) {
  console.log("Adult");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// Switch Statement
switch (fruit) {
  case "apple":
    console.log("Selected apple");
    break;
  case "banana":
    console.log("Selected banana");
    break;
  default:
    console.log("Unknown fruit");
}`
  },
  {
    id: 'loops',
    title: 'Loops & Iterations',
    description: 'Learn different ways to iterate over data in JavaScript',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    content: 'JavaScript offers several ways to perform loops and iterations. Each type of loop has its specific use cases and advantages.',
    example: `// For Loop
for (let i = 0; i < 5; i++) {
  console.log(\`Iteration \${i}\`);
}

// While Loop
let count = 0;
while (count < 5) {
  console.log(\`Count: \${count}\`);
  count++;
}

// Do-While Loop
let num = 0;
do {
  console.log(\`Number: \${num}\`);
  num++;
} while (num < 3);

// For...of Loop (Arrays)
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}

// For...in Loop (Objects)
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// Array methods for iteration
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num));
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);`
  },
  {
    id: 'functions',
    title: 'Functions & Scope',
    description: 'Master function declarations, expressions, and scope in JavaScript',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    content: 'Functions are fundamental building blocks in JavaScript. Understanding different ways to create and use functions, along with scope concepts, is essential for writing maintainable code.',
    example: `// Function Declaration
function greet(name) {
  return \`Hello, \${name}!\`;
}

// Function Expression
const add = function(a, b) {
  return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Default Parameters
const greetUser = (name = "Guest") => \`Welcome, \${name}!\`;

// Rest Parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Closure Example
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

// Immediately Invoked Function Expression (IIFE)
(function() {
  const privateVar = "I'm private";
  console.log(privateVar);
})();`
  },
  {
    id: 'dom-manipulation',
    title: 'DOM Manipulation',
    description: 'Learn to interact with HTML elements using JavaScript',
    difficulty: 'Beginner',
    category: 'Web APIs',
    content: 'The Document Object Model (DOM) is a programming interface for HTML documents. It represents the page as a tree of objects that you can modify with JavaScript.',
    example: `// Selecting Elements
const element = document.querySelector('.my-class');
const elements = document.querySelectorAll('.item');
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');

// Creating Elements
const div = document.createElement('div');
div.className = 'new-element';
div.textContent = 'Hello World';
document.body.appendChild(div);

// Modifying Elements
element.style.backgroundColor = 'blue';
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('visible');
element.setAttribute('data-id', '123');

// Event Handling
element.addEventListener('click', (e) => {
  console.log('Clicked!', e);
});

element.addEventListener('mouseover', (e) => {
  e.target.style.color = 'red';
});

// Event Delegation
document.body.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    console.log('Button clicked!');
  }
});`
  }
];