// ...: also a rest operator and spread also
// rest operator: it returns the values in an array
// spread operator: it returns the values in an object
// depends on the context

function calculateCartPrice(...num1){ // can also do as (val1, val2, ...num1)
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

// pass objects to function

const user = {
    name: "sujan",
    age: 23
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.age}`)
}

handleObject(user)

const myArr = [200, 400, 500]

function returnSecondValue(getArr){
    return getArr[0]
}

console.log(returnSecondValue(myArr))
