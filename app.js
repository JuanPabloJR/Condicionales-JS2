//Condicionales if , if else, switch

/*let numero1 = 101;
let numero2 = 20;

if (numero1 > numero2) {
    console.log("El número : "+ numero1 + " es mayor que el número " + numero2);
} else {
    console.log("El número : "+ numero2 + " es mayor que el número " + numero1);
}
*/
//Pedir la edad del usuario decirle si es mayor de edad, siempre y cuando te de un valor mayor a 0.

/*let edad = prompt("Dame tu edad");
if (edad > 0) {
    if (edad >= 18) {
    document.write("Eres mayor de edad");
    }else {
document.write("Eres menor de edad");
    }
}else {
document.write("Edad no válida");
}
*/
/*let dia = prompt("Dame el dia de la semana").toLowerCase();

switch (dia) {
    case "lunes":
        console.log("El día que seleccionaste es lunes");
        break;
        case "martes":
        console.log("El día que seleccionaste es martes");
        break;
        case "miércoles":
        console.log("El día que seleccionaste es miércoles");
        break;
        case "jueves":
        console.log("El día que seleccionaste es jueves");
        break;
        case "viernes":
        console.log("El día que seleccionaste es viernes");
       break;
    default:
        console.log("Este no es un dia");
        break;
} */
//Operador Ternario
/*let numero1 = 15;
let numero2 = 20;

                    //condicion ? true : false
let valor = (numero1 > numero2) ? "El numero 1 es mayor" : "El numero2 es mayor";

console.log(valor); */

//Pedir dos numeros y que el programa nos diga cual es el mayor, menor y si son iguales
/* let numero1 = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));
if (numero1 === numero2) {
    document.write("El numero: "+ numero1 + " es igual que "+ numero2);
}
    if (numero1 > numero2) {
    document.write("El numero: "+ numero1 + " es mayor que "+ numero2);
    } 
    if (numero2 > numero1) {
        document.write("El numero: " + numero1 + " es menor que "+numero2);   
    } */
//Pedir un numero y me diga si es par o impar en consola o en el dom, numero mod 2 o numero % 2= residuo
/* let numero1 = prompt("Dame un número")
if (numero1%2==0) {
    console.log("El número: "+ numero1 + " es par");
} else {
    console.log("El número: "+ numero1 + " es impar");
} */
//Pedir dos numeros entero y devolver el cociente o sea el resultado de un dividir el numero 1 entre el 2, pero si uno de los numeros es 0 o no hacer nada y mandar mensaje de error

/* let numero1  = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));
const division = parseFloat(numero1) / parseFloat(numero2);
if (Number.isInteger(numero1) && Number.isInteger(numero2)) {
    if (numero1 != 0 && numero2 != 0) {
        console.log("El resultado de la división es: "+ division);
    } else {
        console.log("Error");        
    }
 } else {
    console.log("Uno o ambos números tienen decimales");
 } */

 //Programa que pida dos números y pregunte cuál operación quiere hacer con los números, sumar, restar, multiplicar o dividir.

let numero1 = parseFloat(prompt("Dame un número"));
let numero2 = parseFloat(prompt("Dame otro número"));
let operacion = prompt("Dame la operación que desea realizar con los números (suma, resta, multiplicación, división)");
let resultado;
 switch (operacion) {

    case "suma":
        resultado = numero1 + numero2;
        console.log("El resultado de la suma es: " + resultado);
        break;
            case "resta":
                resultado = numero1 - numero2;
                console.log("El resultado de la resta es: " + resultado);
            break;
            case "multiplicación":
                 resultado = numero1 * numero2;
                console.log("El resultado de la multiplicación es: " + resultado);
            break;
            case "división":
                 resultado = numero1 / numero2;
                console.log("El resultado de la división es: " + resultado);
            break;
    default:
        console.log("Esta no es una operación");
        break;
 } 