//+ Plus strings
//outdated method

const name = "danish"
const age = 18
const isLoggedIn = false

console.log("user name is " + name + "his age is " + age + "and his login Value is " + isLoggedIn);

// Recomended Method

console.log(`user name is ${name} his age is ${age} his login value is ${isLoggedIn}`);

// there is another way to declare stings by using bjects of js

const gameName = new String('danish');
console.log(gameName[0]);
console.log(typeof gameName);
console.log(gameName.__proto__);
// console.log(gameName.replace("danish", "mehvish"));
console.log(gameName.slice(0, 4));
console.log(gameName.slice(-8, 4));
console.log(gameName.substring(0, 4));

const useName = "     danish     ";
console.log(useName);
console.log(useName.trim());

const url = "https://www.www.com/%20website"
console.log(url.replace("%20", "danish"));

const game = "assassin-creed danish ramish";
console.log(game.split("-"));

console.log(url.includes("ramish"));
console.log(url.includes("danish"));
console.log(url.includes("%20"));