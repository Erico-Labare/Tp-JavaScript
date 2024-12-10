function greet(nom) {
    return `Bonjour, ${nom} !`;
}

const message = greet("Jean");
console.log(message);


// ------------------------------------


const multiplyByTwo = (number) => number * 2;

console.log(multiplyByTwo(5));


// -----------------------------------


function calculateTotal(price, taxRate = 0.2) {
    return price + (price * taxRate);
}

console.log(calculateTotal(100));
console.log(calculateTotal(100, 0.1));