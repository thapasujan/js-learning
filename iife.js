// Immdiately Invoked Function Expressions (IEFE)

// used to remove pollution done by global scope

(function iife1() {
    console.log("IIFE");
})();

// iife using arrow function
( () => {
    console.log("IIFE2");
})();

// iife using arguments

(   (name) => {
    console.log(`IIFE3 ${name}`);
})('sujan');