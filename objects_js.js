// object literals

const mySym = Symbol("key1")

const JsUser = { 
    name: "Sujan",
    age: 23,
    [mySym] : "mykey",
    location: "KTM",
    email: "sujan@.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// symbol can be add by using [] in object
// console.log(JsUser[mySym])

// object access methods

console.log(JsUser.email) // it can only access the value of key having single word
console.log(JsUser["email"]) // it can also access the value of key having multiple words

// to make the object freeze for not giving to propogate the object elements
// Object.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())
