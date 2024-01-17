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

console.log(names[0]);

//***********************************************************************************/
//+++++++++++++++++++++++++++++Memory types++++++++++++++++++++++++++++++++++++++++++
//++++++++++++++=>Stack+++++++++++++=>Heep

// Stack(premitive),    Heep(NoN Premitive)
//stack mein orignal value mein change nahi hota sirf copy milti hai
//For Example
let = myYoutubeName = "hitesh Chuhdary"
let anotherYoutuberName = myYoutubeName
anotherYoutuberName = "chai aur code"
console.log(anotherYoutuberName);
console.log(myYoutubeName);

//**************************************************************************************************/
//**************************Heep**************************

let user1 = {
    name : "danish",
    age :18,
    isLoggedIn : false
}

let user2 = user1

user2.name = "taimoor"
console.log(user1.name);
console.log(user2.name);