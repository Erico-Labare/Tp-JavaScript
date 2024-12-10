const calculerAvance = (a, b, operation) => operation(a, b);

//function puissance(a, b) {
//    return Math.pow(a, b);
//}
const puissance = (a,b) => Math.pow(a, b);

//function reste(a, b) {
//    return a % b;
//}
const reste = (a,b) => a % b;

const nombre1 = 5;
const nombre2 = 3;

console.log(`Puissance (${nombre1}^${nombre2}) :`, calculerAvance(nombre1, nombre2, puissance));
console.log(`Reste entier (${nombre1} % ${nombre2}) :`, calculerAvance(nombre1, nombre2, reste));