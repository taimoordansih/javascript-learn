const score = 400
console.log(score);
console.log(typeof (score));

const balance = new Number(400)
console.log(balance);
console.log(typeof (balance));

console.log(balance.toFixed(2));

// ++++++++++++++++++++++++++++++++++++++++toprecision++++++++++++++++++++++++++++++++++++++++++++++

const otherNumber = 23.895452
console.log(otherNumber.toPrecision(3));

const otherNumber1 = 123.895452
console.log(otherNumber1.toPrecision(3));

const otherNumber2 = 1234.895452
console.log(otherNumber2.toPrecision(3));

const otherNumber3 = 1234.895452
console.log(otherNumber3.toPrecision(4));

//++++++++++++++++++++++++++++++++++++convert Number To String+++++++++++++++++++++++++++++++++++++++++ 

console.log(balance.toString());
console.log(balance.toString);
console.log(balance.toString().length);