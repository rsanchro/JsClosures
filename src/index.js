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

// FUNCIONES AUTOINVOCADAS

/*
  Son funciones que se autoejecutan solas, la forma de hacerlo es metiendo entre paréntesis la propia función, ejemplo
*/
let s = "Hola";
const saludar = ((ss, pp) => `${ss} ${pp}`)(s, "Luis");
c(saludar);
// se usaba mucho antes, en ES5, que estaba cojo y le faltaban cosas, fijarse que tiene 2 paréntesis en los parametros

// FUNCIONES NOMBRADAS O ANONIMAS

// Si no tuviera los () finales no se podría ejecutar

/*
setTimeout(() => {
  alert(`Hola Ruben`);
}, 3000);
*/

/*(function(message) {
  alert(message);
}('foo'));

(function() {
  alert("fuuuu");
})();

(function() {
  alert('I am anonymous');
})

var anon = function() {
  alert('I am anonymous');
}
anon();
*/

// EL SCOPE es el contexto en el que una variable existe
// ejemplo:
// no me deja llamar a profesor porque solo existe en el espacio entre llaves, solo puedes leer cuando te encuentras por dentro
{
  let profesor = "Alexis";
  {
    profesor = "Ruben";
    console.log(profesor);
  }
}
// c(profesor); (no existe)

// VOLVEMOS CON LOS CLOSURES -
function aumentar() {
  let numero = 0; // la ventaja de tener aquí numero es que se encuntra protegida la variable y no se puede cambiar
  return function() {
    numero++;
    console.log(numero);
  };
}
// esta llamada de abajo devuelve... // function() {   numero++;   console.log(numero); };
aumentar(3);
aumentar(3);
aumentar(3);

c(aumentar(3)(3)); // sigue pasando y devolviendo

const incrementar = aumentar();
incrementar(); // Devuelve 1 porque el let numero se encuentra por fuera, es decir, como si tuvieras numero de forma global y solo hicieras numero++ cada vez que lo llamas
incrementar(); // Devuelve 2
incrementar(); // Devuelve 3
incrementar(); // Devuelve 4
// no sería una función pura porque se encuentra por fuera

// es lo mismo que: (sin embargo n no se encuentra protegida por la función como si ocurre aquí)
let n = 0;
function aument() {
  console.log(n++);
}

let edad = 34;
// THIS SERÍA EL OBJETO TAL CUAL en el que te encuentras
let user = {
  nombre: "Rubén",
  edad: 54,
  getEdad() {
    console.log(this.edad); // THIS SERÍA EL OBJETO TAL CUAL en el que te encuentras, si se lo quitara intentaría buscarlo por fuera, en el objeto global, en el scope mas alto y daría 34
  }
};
user.getEdad();
