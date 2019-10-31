import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

/*

CLOSURES
  - Un Closure es una función dentro de otra, de forma que si tenemos:
function suma (x){
  return function (b){
    return x*b;
  }
}

Cuando ejecutamos una sola vez
Suma(3) tan solo nos devolverá el literal de function (b)...
Pero si le pasamos el segundo parámetro (2) obtendremos la suma
*/

console.log("Prueba");
let c = console.log;
/*
function suma (x)
{
  return function (b){
    return x+b;
  }
}

let c = console.log;
c(suma(3)(2))

*/

/*
También podemos utilizarlo con funciones flechas
*/

// función lógica que devuelve una multiplicación con 2 variables
const multiplica = (a, b) => a * b;

// Cada => es un function, de forma que al ejecutarse solo una vez por ejemplo
const suma = a => b => a * b;

// Nos muestra el literal a partir de: => b => a*b;
console.log(suma(4));

// Si le metemos el segundo valor obtenemos:
console.log(suma(4)(2));

// OTRA FORMA DE VERLO MÁS COMPLICADA PERO HACIENDO LO MISMO

const doSomething = x => y => x * y;
const a = doSomething(2)(2); // a contiene 4
const b = doSomething(3); // b contiene y => 3 * y
c(doSomething(a)(b(3))); // doSomething(4)(9) = 36 porque  4 * (3*3)
