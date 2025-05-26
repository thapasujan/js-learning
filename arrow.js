 // arrow function 

 const add = () => {
    let a = 10
    let b = 20
    console.log(a+b)
    console.log(this) // gives the empty object
 }

 add()

 // syntax 
 // 1> const add = (arr1, arr2) => {}

// 2> const add = (a,b) => (a+b)