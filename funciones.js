const prompt = require("prompt-sync")({sigint: true});

//Ejercicio 1
//Con prompt

let pulgada = parseFloat(prompt("Ingresa las pulgadas: "));

function convertir(pulgadas){
  return pulgadas * 2.54;
}

console.log(convertir(pulgada));

//Sin prompt

function convertir(pulgadas){
  return pulgadas * 2.54;
}

console.log(convertir(7));


//Ejercicio 2
//Con prompt

let name = prompt("Ingresa el nombre: ");

function url(string){
  return "http://www." + string + ".com";
}

console.log(url(name));

//Sin prompt 

function url(string){
  return "http://www." + string + ".com";
}

console.log(url("daniel")); 


//Ejericio 3
//Con prompt

let frase = prompt("Ingresa tu frase: ");

function phrase(string){
  return string + "!";
}

console.log(phrase(frase));

//Sin prompt 

function phrase(string){
  return string + "!";
}

console.log(phrase("Mi mama me mima")); 


//Ejericio 4
//Con prompt

let edad = parseInt(prompt("Ingresa el dato: "));

function edadHumano(edadPerro){
  return edadPerro * 7;
}

console.log(edadHumano(edad));

//Sin prompt 

function edadHumano(edadPerro){
  return edadPerro * 7;
}

console.log(edadHumano(6)); 


//Ejercicio 5
//Con prompt

let sueldoMes = parseInt(prompt("Ingresa tu sueldo mensual: "));

function valorHora (sueldoMensual) {
  return sueldoMensual / 40;
}

console.log(valorHora(sueldoMes));

//Sin prompt 

function valorHora (sueldoMensual) {
  return sueldoMensual / 40;
}

console.log(valorHora(250)); 


//Ejercicio 6
//Con prompt

let peso = parseFloat(prompt("Ingresa tu peso en kilogramos: "));
let alturaMts = parseFloat(prompt("Ingresa tu altura en metros: "));

function calculadorIMC(pesoKm, alturaMetros) {
  return pesoKm / (alturaMetros ** 2);
}

console.log(calculadorIMC(peso, alturaMts)); 

//Sin prompt

function calculadorIMC(pesoKm, alturaMetros) {
  return pesoKm / (alturaMetros ** 2);
}

console.log(calculadorIMC(68, 1.80)); 


//Ejercicio 7
//Con prompt

let string = prompt("Ingresa una frase: ");

function aMayus(minuscula) {
  return minuscula.toUpperCase();
}

console.log(aMayus(string)); 

//Sin prompt

function aMayus(minuscula) {
  return minuscula.toUpperCase();
}

console.log(aMayus("hola, me gusta programar!")); 


//Ejercicio 8

function tipoDeDato(dato) {
  return typeof dato;
}

console.log(tipoDeDato(true)); 


//Ejercicio 9
//Con prompt

let radio = parseFloat(prompt("Ingresa el radio del curculo: "));

function cicunferencia(radioCirculo) {
  return 2 * Math.PI * radioCirculo;
}

console.log(cicunferencia(radio)); 

