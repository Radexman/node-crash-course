import getPosts, { getPostsLength } from './postController.js';

// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log(`Random number: ${generateRandomNumber()}`);
// console.log(`Celcius to fahrenheit: ${celciusToFahrenheit(0)}`);

console.log(getPosts());
console.log(`Posts Length: ${getPostsLength()}`);
