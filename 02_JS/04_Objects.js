// const tinderUser = new Object() object diclear by constructor

const tinderUser = {}
tinderUser.id = "123"
tinderUser.Name = "danish"
tinderUser.isLoggedIn = false

console.log(tinderUser);

// Objects in Object

const regularUser = {
    email : "wwe.com",
    fullName : {
        userFullName : {
            firstName : "taimoor",
            lastName : "danish"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

//*********************************************************************************************//

// +++++++++++++++++Assign operator++++++++++++++++// for plus two obj

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}
const obj3 = {
    5 : "e",
    6 : "f"
}

// const obj4 = {obj1, obj2, obj3} 

// const obj4 = Object.assign({}, obj1, obj2, obj3) // Assign Operator

const obj4 = {...obj1, ...obj2, ...obj3}  //Spread Operator

console.log(obj4);

const users = [
    {
        id : 1,
        email : "www.com"
    },
    {
        id : 2,
        email : "www@.com"
    }
]
console.log(users[1].email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
console.log(tinderUser.hasOwnProperty("isLogged"));