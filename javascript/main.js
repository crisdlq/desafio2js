
/* let n1= prompt("Ingrese su sueldo neto en pesos argentinos");
let n2 =prompt("Ingrese el porcentaje de sueldo que le gustaria destinar a ahorrar en crypto"); */

function saludar(){
    let nombreIngresado=prompt("Ingresa tu nombre y apellido");
    alert("Hola " + nombreIngresado + ". Bienvenido a la DCA Crypto Calculadora , Por favor presiona Aceptar y contesta las preguntas en las proximas ventanas:");
}

saludar();

let n1=prompt("Cual es tu sueldo neto en pesos Argentinos");

let n2=prompt("Que porcentaje de tu sueldo te gustaria destinar a Crypto para utilizarlo como una jubilacion alternativa?");

function porcentaje(){
    alert("Gracias, segun tus respuestas , te gustaria destinar pesos argentinos " + (n1/100)*n2 + " para tu jubilacion alternativa en crypto. La cotizacion del dia de hoy de BTC es de USD 36.500 , por lo tanto estarias acumulando: xxxxxx BTC por mes. A continuacion podras ver toda la informacion necesaria en nuestra web ");
}

porcentaje();