// premitive datatype
// string : number : boolean : null : undefined : symbol : bigint

const scroe = 100
const scoreValue = 100.3
const isLogedIn = false
const OutSideTemp = null
let userEmail;

const id = Symbol("123")
const anOtherId = Symbol("123")

console.log(id===anOtherId);

const bigNumber = 123456789856677n


// non premitive datatype
// arrays : objects

const names = ["danish", "ramish", "arish"]

const myObject = {
    name : "danish",
    age : 18,
}

const myFunction = function (params) {
    console.log("hello world");
}
myFunction()