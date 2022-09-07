//variables
/*
let nombre="tomas"
console.log(nombre)
let cantidadDeNombres= 181
console.log(cantidadDeNombres)
let existiendo= true
console.log(existiendo)

//tipos de datos
//numeros
//cadena de caracteres o STRINGS "tomas"
//buleanos o booleans TRUE-FALSE*/

//diferencia entre let y cons...

/*
let curso;

curso= "js"

console.log(curso)
*/
/*
let numero1= "coder"
let numero2= "house" 

let resultado= numero1 + " " + numero2

alert(resultado) */


//PROMPT
/*
let nombre = prompt("ingrese su nombre")
console.log (nombre)
alert ("hola " + nombre) */

/*
let numero1 =  /Number(prompt("ingrese un numero"))
let numero2 = Number(prompt("ingrese otro numero"))
 
let resultado = numero1 + numero2
alert(resultado)
*/

/* if(condicion) {
    valor verdadero
} else {valor falso}*/

/* OPERADORES LOGICOS

==Es igual a...
> Mayor a...
>= Mayor o igual a...
< Menor a...
<= Menor o igual a...
||OR una U otra condicion
&& AND una Y otra condicion
!== Distinto

*/

/*
const puntaje = "1000"

if(puntaje == 1000) {
console.log("Es igual")
} else {
    console.log("No es igual")
}


const dinero = 1000
const totalAPagar = 500

if (dinero >= totalAPagar) {
console.log("podemos pagar") 
} else {
    console.log("fondos insuficientes")
}

const dinero = 300
const totalAPagar = 800
const tarjeta = false;

if (dinero > totalAPagar) {
    console.log("podemos pagar")
} else if (tarjeta) {
    console.log("puedo abonar porque tengo tarjeta")
} else{
    console.log("fondos insuficientes")
}


const efectivo = 300
const credito = 400
const disponible = efectivo + credito;
const totalAPagar = 600

if (efectivo > totalAPagar || credito > totalAPagar
    || disponible > totalAPagar) {
    console.log("podemos comprar")
} else {
    console.log("fondos insuficientes")
}


let precio = prompt("ingrese el precio del producto: ")
if (precio >= 100) {
    alert("el producto es muy costoso")
} else if (precio >= 50) 
alert("el producto es caro")
else {
    alert("el precio del producto es accesible")
}
*/

let nombreDeAlumno = prompt("ingrese nombre del alumno")
let apellidoDeAlumno = prompt("ingrese el apellido del alumno")

if (nombreDeAlumno !== " " && apellidoDeAlumno !== " ") {
    alert("nombre del alumno: " + nombreDeAlumno + "Apellido: " + apellidoDeAlumno)
} else {
    
}