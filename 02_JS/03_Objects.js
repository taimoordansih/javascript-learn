// Objects ko declear karne ke do trike hein ek "|Constructor|", ke zariye or dosra "|Litrals|" ke zariya
//Jab objects ko "|Constuctor|" ke zariye diclear kiya jata h to "|Singlton|" object banta hai
// yani wo apne ap mein sirf ek hi object hai


// Object.create, const jsUser = new Object()  constructor method 

// Object litrals

const jsUser = {
    name : "danish",
    age : 18,
    email : "danish@gmail.com",
    state : "punjab",
    isLogedIn : false,
    lastLogIn : ["Saturday", "Sunday"],
    "city" : "lahore"
}

// Objects ko acess karne ke do 2 trike hote hein ek dot . laga kar or dosra [] ke zariye

console.log(jsUser.name);
console.log(jsUser["email"]);

// is case mein dot . wala method kam nahi karta [] ke ilawa koi tarika nahi is ko access karne ka

console.log(jsUser["city"]);

// Symbols ki key ko objects mein diclear karne ka tarika

const mySum = Symbol("key1")

const objectKeys = {
    mySum : "myKey1" 
}

console.log(objectKeys.mySum);
console.log(typeof (objectKeys.mySum));// wrong method 
console.log(objectKeys);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const realMethod = Symbol("Key1")

const dicleatKeyInObj = {
    [realMethod] : "MyKey1"
}
console.log(dicleatKeyInObj[realMethod]);
console.log(typeof (dicleatKeyInObj[realMethod]));
console.log(dicleatKeyInObj);

// Objects ki values ko change karne ke liye "|Over Write|" karte hein

const overWrite = {
    naam : "dnaish"
}
overWrite.naam = "ramish"
console.log(overWrite["naam"]);

// values ko lock karna

const valueLock = {
    country : "Pakistan"
}
Object.freeze(valueLock)
valueLock.country = "india"
console.log(valueLock);
console.log(valueLock["country"]);

// Function in Objects 
// yahan jsUser.Greating ka matlab dot . ke zariye hum jsUser mein ek Key "Greatings" add kar rahe hein 

jsUser.Greating = function(){
    console.log("hello user");
}
console.log(jsUser.Greating);
console.log(jsUser.Greating());

jsUser.GreetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
}
console.log(jsUser.GreetingTwo());
