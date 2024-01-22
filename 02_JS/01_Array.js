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

const marvel_Heros = ["iron man", "captan america", "thor"]
const dc_Heros = ["super man", "batman", "aquaman"]

// marvel_Heros.push(dc_Heros)
// console.log(marvel_Heros); it gives array into aray

// const all_heros = marvel_Heros.concat(dc_Heros)
// console.log(all_heros); it joins two arays and returns a new array

const all_heros = [...marvel_Heros, ...dc_Heros]
console.log(all_heros); // The spread operator is a feature of JavaScript 
//introduced with ES6 that gives you access to the insides of an iterable object. 
//An “iterable object” is anything you can iterate over item by item, 
//such as arrays, objects literals, and strings. 
//These kinds of JavaScript types can be traversed in some sequential fashion

//+++++++++++++++++++++Flat Opretors+++++++++++++++++++++++++++++

const arrIntoArr =[1, 2, 3, 4, [5, 8], [3, 4, 2, [3, 6, 6]]]
const flatArr = arrIntoArr.flat(Infinity)
console.log(flatArr);

// kai bar data object ya string mein ki surat mein
console.log(Array.isArray("danish"));
console.log(Array.from("danish"));
// from google To convert an ordinary object that's not iterable or array-like to 
// an array (by enumerating its property keys, values, or both),
// use Object.keys() , Object.values() , or Object.entries() .
// To convert an async iterable to an array, use Array.fromAsync() . 
// Array.from() never creates a sparse array.

// console.log(Object.keys({name : "danish"}));

const score1 = 100
const score2 = 200
const score3 = 300
console.log(Array.of(score1, score2, score3));

