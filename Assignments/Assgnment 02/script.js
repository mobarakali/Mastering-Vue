/*
Exercise 1:
 Write a function named destructureExample that takes in an object and
 an array as parameters. The function should use destructuring to 
 extract the values 'name' and 'age' from the object and the values 
 at index 0 and index 2 from the array. The function should then 
 return an object with the extracted values as properties with name 
 and age.

 Example:

 Input:
  const obj = { name: 'John', age: 30, city: 'New York' };
  const arr = [10, 20, 30, 40];

Output:
  { name: 'John', age: 30 }

*/
function destructureExample(obj, arr) {
    const { name, age } = obj; 
    const [index0, , index2] = arr;
    
    return { name, age }; // Destructed velues of arr not used in return
}

const obj = { name: 'John', age: 30, city: 'New York' };
const arr = [10, 20, 30, 40];


console.log(destructureExample(obj, arr)); // { name: 'John', age: 30 }


/*
Exercise 2:

Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator. The function should return the sum of all the numbers.

Example:

Input:
> sumNumbers(1, 2, 3, 4, 5);

Output:
> 15
*/

function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4, 5)); // 15


/*
Exercise 3:
 Write a function named createGreeting that takes in a name as a parameter and returns a greeting message using template literals. The message should be in the format: `"Hello, [name]! Welcome to our website."`
Example:

Input:
createGreeting('Alice');

Output:
"Hello, Alice! Welcome to our website."
*/
function createGreeting(name) {
  return `Hello, ${name}! Welcome to our website.`;
}

const greeting = createGreeting('Alice'); 
console.log(greeting); // Hello, Alice! Welcome to our website.


/*
Exercise 4: 
Write a function named isEven that takes in a number as a parameter and returns the string "Even" if the number is even, and "Odd" if the number is odd. Use a ternary operator instead of an if/else statement.

Example:

Input:
isEven(7);

Output:
"Odd" 
*/

function isEven(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

console.log(isEven(7)); // Odd



/*
Exercise 5: 

Convert the following function to an arrow function:

function multiply(a, b) {
  return a * b;
}

*/

const multiply = (a, b)=> a * b;

console.log(multiply(2, 30)); // 60


/*Exercise 6: 
Write a function named getLargestNumber that takes in two numbers as parameters. The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

Example:
Input:
getLargestNumber(10, 5);

Output:
10
*/

const getLargestNumber = (a, b) => a > b && a || b;

console.log(getLargestNumber(10, 5)); // 10

/*
Exercise 7:
Write a function named getAddressCity that takes in an object representing a person's address. The address object has properties 'street', 'city', and 'country'. The function should return the value of the 'city' property if it exists, or the string "Unknown" if it doesn't exist, using optional chaining.

Example:

Input:

const address = { street: '123 Main St', country: 'USA' };

Output:

"Unknown"
*/

const getAddressCity = (address) => address?.city || 'Unknown';

const address = { street: '123 Main St', country: 'USA' };
const address2 = { street: 'Katakhali', city: 'Rajshahi', country: 'Bangladesh' };

console.log(getAddressCity(address)); // Unknown
console.log(getAddressCity(address2)); // Rajshahi


/* Exercise 8: 
Write a function named doubleNumbers that takes in an array of numbers and returns a new array with each number doubled using the array map method.

Example:

Input:
> doubleNumbers([1, 2, 3, 4, 5]);

Output:
>[2, 4, 6, 8, 10]
*/

const doubleNumbers = (numbers) => numbers.map(num => num * 2);

console.log(doubleNumbers([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]


/* 
Exercise 9: 
Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

Example:

Input:
filterEvenNumbers([1, 2, 3, 4, 5]);

Output:
[2, 4]
*/

const filterEvenNumbers = (numbers) => numbers.filter(num => num % 2 === 0);

console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]


/*
Exercise 10: 
Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

Example:

Input:
> sumArray([1, 2, 3, 4, 5]);

Output:
> 15
*/

const sumArray = (numbers) => numbers.reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 2, 3, 4, 5])); // 15


/*
Exercise 11: 
Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

Example:

Input:
> sortNumbers([5, 2, 8, 1, 4]);

Output:
> [1, 2, 4, 5, 8]
*/

const sortNumbers = (numbers) => numbers.sort((a, b) => a - b);

console.log(sortNumbers([5, 2, 8, 1, 4])); // [1, 2, 4, 5, 8]



