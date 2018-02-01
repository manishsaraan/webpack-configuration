//index.js
import sum from './sum';
import multiply from './multiply';

//importing css
import './math_output.css';

//import image utility
import addImageToPage from './image_util';

//import images
import multiplyImg from '../images/multiply.png';
import sumImg from '../images/sum.png';

var total_multiply = multiply(5, 3);
var totalSum = sum(5, 3);



//calculate the product and add it to the body
const multiplyResultSpan = document.createElement('span');
multiplyResultSpan.appendChild(document.createTextNode(`Product of 5 and 3 is : ${total_multiply}`));

//calculate the sum and add it to the body
const sumResultSpan = document.createElement('span');
sumResultSpan.appendChild(document.createTextNode(`Sum of 5 and 3 = ${totalSum}`));

//show results
document.body.appendChild(multiplyResultSpan);
document.body.appendChild(sumResultSpan);

addImageToPage(multiplyImg);
addImageToPage(sumImg);