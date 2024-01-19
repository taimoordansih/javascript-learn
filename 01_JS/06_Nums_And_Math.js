// const score = 400
// console.log(score);
// console.log(typeof (score));

// const balance = new Number(400)
// console.log(balance);
// console.log(typeof (balance));

// console.log(balance.toFixed(2));

// // ++++++++++++++++++++++++++++++++++++++++toprecision++++++++++++++++++++++++++++++++++++++++++++++

// const otherNumber = 23.895452
// console.log(otherNumber.toPrecision(3));

// const otherNumber1 = 123.895452
// console.log(otherNumber1.toPrecision(3));

// const otherNumber2 = 1234.895452
// console.log(otherNumber2.toPrecision(3));

// const otherNumber3 = 1234.895452
// console.log(otherNumber3.toPrecision(4));

// //++++++++++++++++++++++++++++++++++++convert Number To String+++++++++++++++++++++++++++++++++++++++++ 

// console.log(balance.toString());
// console.log(balance.toString);
// console.log(balance.toString().length);
// const bToS = balance.toString()
// console.log(typeof (bToS));

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));

// // ==============================Math=====================================

// console.log(Math);

// console.log(Math.abs(-4));
// console.log(Math.abs(4));

// console.log(Math.round(4.3));
// console.log(Math.floor(47.3));
// console.log(Math.ceil(47.3));

// // => max value

// console.log(Math.max(4, 3, 7, 9, 3, 7));

// // => min value

// console.log(Math.min(4, 3, 7, 9, 3, 7));

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min) + min));
