var sum = require('./sum');
var multiply = require('./multiply');
var total_multiply = multiply(5, 3);
var totalSum = sum(5, 3);

console.log(`Product of 5 and 3 is : ${total_multiply}`);
console.log(`Sum of 5 and 3 is ${totalSum}`);