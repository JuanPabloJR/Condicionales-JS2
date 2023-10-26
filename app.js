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
let dia = prompt("Dame el dia de la semana").toLowerCase();

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
}