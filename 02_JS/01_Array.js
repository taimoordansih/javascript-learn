// ============================Array=============================
const myArry = [0,  1,  2,  3,  4,  5]
// const heros = ["super man", " batman", " aqua man"]
// const myArr2 = new Array("danish", " ramish",  2,  8,  4)

// console.log(myArry[2]);
// console.log(heros);
// console.log(heros[2]);
// console.log(myArr2);
// console.log(myArr2[1,3]);

// console.log(`my favourate heros names is ${heros} the index number is ${myArry} and names is ${myArr2}`);

// //================================Array Methods============================

// // push is used to add something in a array in the last

// myArry.push("add something in the end")
// console.log(myArry);

// myArry.push(21)
// console.log(myArry);

// myArry.push("o ja turja")
// console.log(myArry);

// // pop is used to removed last value in Array

// myArry.pop()
// console.log(myArry);

// // unshift is used to add something in the start in a Array

// myArry.unshift("add something in the start")
// console.log(myArry);

// // shift works without a add something in () it is used to remove first value

// myArry.shift()
// console.log(myArry);

// // includes is a question that gives the answer in boolean

// console.log(myArry.includes(19));
// console.log(myArry.includes(2));

// // index is also a question if answer is false it give -1 true the index value 

// console.log(myArry.indexOf(19));
// console.log(myArry.indexOf(1));

// // .join add all elements of array and returns a string

// console.log(myArry.join());
// console.log(typeof (myArry.join()));

// slice and splice (difference between them) (for run in terminal coment from line number 55 to 3)
console.log("orignal array", myArry);
console.log("sliced array",myArry.slice(1,3));
console.log("array after sliced", myArry);

console.log("spliced array",myArry.splice(1,3));
console.log("array after spliced ", myArry);