//loop for objects (for in)

const myObj = {
    js: "javascript",
    cpp: "c++",
    py: "python",
    rb: "ruby"
}

// for (const key in myObj){
//     console.log(key, ':', myObj[key]);
// }

// for in for array

const programming = ["js", "rb", "py", "cpp"]

for (const key in programming){
    console.log(key, ':', programming[key]);
}