// objects using singleton or constructor
const myApp = new Object(); // singleton object

// const myApp = {} // empty object, non singleton

myApp.id = "12as";
myApp.name = "sujan";
myApp.isLoggedIn = false;

// console.log(myApp)

const reguarUser = {
  email: "sujan@.com",
  fullName: {
    userFullName: {
      firstName: "Sujan",
      lastName: "Thapa",
    },
  },
};

// console.log(reguarUser.fullName?.userFullName.firstName)// optional chaining using ?
// console.log(reguarUser.fullName.userFullName.firstName)

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = Object.assign({}, obj1, obj2); // {}: target, others source

const obj4 = { ...obj1, ...obj2 };
// console.log(obj3);
// console.log(obj4);

// for the values from database like:

const users = [
    { id: 1, email: "sujan@.com" },
    { id: 2, email: "sujan@.com" },
    { id: 3, email: "sujan@.com" },
];

// Object.entries(user): gives all of the key values in an array


// destructuring of objects

const course = {
    courseName: "js",
    price: "999",
    courseInstructor: "Sujan"
}

const {courseInstructor: instructor, courseName: cName} = course


console.log(instructor)
console.log(cName)