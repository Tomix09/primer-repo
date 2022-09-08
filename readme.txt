las variables LET pueden iniciar vacias o ser redeclaradas
es decir un codigo pisa al otro
_ las variables CONS no pueden iniciar vacias y no pueden ser redeclaradas


java


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


let NombreAlumno = prompt("ingrese el nombre de alumno")
let ApellidoAlumno = prompt("ingrese el apellido del alumno")

if (NombreAlumno !== " " && ApellidoAlumno !== " " ) {
    alert("Nombre del alumno: " + NombreAlumno + "apellido: " + ApellidoAlumno)
} else {
    alert("no ingreso datos")
}


Tabla de Verdad del Operador &&

X | Y | X&&Y
T | T | T
T | F | F
F | T | T
F | F | F

Tabla de Verdad del operador ||or

X | Y


let nombre = prompt("ingrese su nombre")
let apellido = prompt("ingrese su apellido")
let edad = prompt("ingrese su edad")

if (nombre == " " && apellido == " " && edad >= 18) {
    alert(nombre + apellido + edad)
} else if (edad < 18) {
    alert("usted es menor de 18 años")
} else{ 
     (nombre == "" + apellido == " " + edad > 18 )
     alert("hola" + nombre + apellido + "de edad" + edad)
}



let food = prompt("que se le antoja cenar?")


switch (food) {
    case "hamburguesa":
        console.log (`pedido: ${food}, valor 1000`)
        break
    
    case "pizza":
        console.log (`pedido: ${food}, valor 1500`)
        break

    case "lomo":
        console.log (`pedido: ${food}, valor 700`)  
        break

    case "Default":
        console.log ("hoy no pedimos cena");
        break   
    
    }
    

    let option = prompt(`elija una opcion de pelicula:
    1. batman
    2. superman
    3. spiderman
    4.moonfall `)

    switch (option) {
        case "1" :
            console.log ("batman")
            break;
        
        case "2" :
            console.log ("superman")
            break
        
        case "3":
            console.log ("spiderman")
            break

        case "4":
            console.log ("moonfall")
            break
       
            default:
                console.log ("no ingresaste una opcion valida")
            break;
    }


let x = 0

while (x <= 100){
    console.log(`el valor de x es: ${x}`)
    x++
}


let entrada = prompt("ingrese un texto o ESC para interrumpir")
let texto = "  "

while (entrada != "ESC" && entrada != "esc" )
{texto += entrada + "  " 

entrada= prompt ("ingrese un texto o ESC para interrumpir")
}
alert (texto)



for( let i = 0; i < 10; i++){
    alert(`el valor de i es: ${i}`)
}


let numero = Number(prompt("ingrese un numero"));

for(let i = 1; i <= 5; i++ ){
    let resultado = numero * i;
    alert (`${numero} x ${i} = ${resultado} `)

}
*/