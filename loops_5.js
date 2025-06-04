// for each loops : mostly used loop 

const coding = ['js', 'py', 'cpp', 'rb', 'java', 'c']

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }


// coding.forEach(printMe)


const myCoding = [
    {
        languageName: "js",
        type: "scripting",
    },
    {
        languageName: "py",
        type: "scripting",
    },
    {
        languageName: "c++",
        type: "compilation",
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName)
} )