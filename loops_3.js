// for of loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2,3,4,5]

// for (const iterator of arr){
//     console.log(iterator);
// }

// const greetings = "Hello Man!"
// for (const greet of greetings){
//     console.log(`Each character is: ${greet}`)
// }


// Maps

const map = new Map()
map.set('NP', "Nepal")
map.set('USA', "United States of America")
map.set('GER', "Germany")

// console.log(map);

for (const [key, country] of map){
    console.log(key, ':-', country);
}


const myObj = {
    'game1': "PUBG",
    'game2': "COD",
    'game3': "FIFA"
}

// for (const [key, game] of myObj){ // doesn't work in object 
//     console.log(key, ':-', game);
// }