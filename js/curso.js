////////////////////Funciones////////////////////////////////////
 //funcion declarada
  //function estoEsUnaFuncion(){
  //console.log("Uno");
  //console.log("Dos");
  //console.log("Tres");
  //return"La funcion ha retornado una cadena de texto";
  //}
  //function saludar(nombre = "Desconocido", edad = 0){
  //    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} anos.`);
  //}

  //saludar("Fernando", 28)
  //saludar("Fernando", 31)
  //saludar("Elena",34)

  //function funcionDeclarada(){
  //console.log()

  //}
  /////////////////////////Arrays//////////////////////////////////////////////
  /*const a = [];
  const b = [1, 2, 3, 'Me vale'];
  console.log(a,b);

  const c = Array.of('a', 'b', 'c', 4, 5, 6);
  console.log(c);

  const d = Array(50).fill(true);
  console.log(d)

  const colores = ['azul', 'rojo', 'verde'];
  console.log(colores);

  colores.push("negro");
  console.log(colores);

  colores.pop();
  console.log(colores);*/
  ////////////////////////Objetos//////////////////////////////////
  /*const Fernando = {
      nombre: 'Fercho',
      apellido: 'Coronel',
      edad: 28,
      email: 'ferchovas20@gmail.com',
  }
  saludar: function(){
      console.log('Hola :)')
  }

  console.log(Fernando)
  console.log(Fernando.email)*/
///////////////////////Tipos de Operadores/////////////////////////////////
/*let edad = 17;

if(edad < 17){
  console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
}

if(edad <= 18){
  console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
}


//Dejame dormir 0hrs a 5hrs
//Buenos dias 6hrs a 11hrs
//Buenas tardes 12hrs a 18hrs
//Buenas noches 19hrs a 23hrs

let hora = 0;

if(hora >= 0 && hora <= 5){
  console.log("Dejame dormir wey, por fa")
}else if(hora >= 6 && hora <= 11){
  console.log("Buenos dias we")
}else if(hora >= 12 && hora <= 18){
  console.log("Buenas tardes we")
}else{
  console.log("Buenas noches we")
}

if(hora < 6){
  console.log("Dejame dormir wey, por fa")
}else if(hora > 5 && hora <= 12){
  console.log("Buenos dias we")
}else if(hora > 11 && hora < 19){
  console.log("Buenas tardes we")
}else{
  console.log("Buenas noches we")
}
//Operador Ternanrio
console.log("Operador Ternario");
let eresMayor = (edad >= 18) 
? "Eres mayor de edad"
: "Eres menor de edad";
console.log(eresMayor); 

//Switch case

//Domingo 0
//Lunes 1
//Martes 2
//Miercoles 3
//Jueves 4
//Viernes 5
//Sabado 6

let dia = 5;
switch (dia){
case 0:
  console.log("Domingo");
break;
case 1:
console.log("Lunes");
break;
case 2:
console.log("Martes");
break;
case 3:
console.log("Miercoles");
break;
case 4:
console.log("Jueves");
break;
case 5:
console.log("Viernes");
break;
case 6:
console.log("Sabado");
break;
default:
  console.log("Ese dia no etziste we")
break; 
}*/
////////////////////////////////////Ciclos(Loop's)//////////////////////////////////////////////
//let contador = 0;

//while (contador < 10){
  //console.log(contador);
 // contador++;
//}

//do {
  //console.log("Do while " + contador);
  //contador++;
//}while(contador < 10);

//for (let i = 0; i < 10; i++) {
  //  console.log("for " + i);
    //}
  //let numeros = [10,20,30,40,50,60,70,80,90,100];
  
  //for(let i = 0; i < numeros.length; i++ ){
    //console.log(numeros[i]);
  //}
  //const Fercho ={
    //nombre : "Fernando",
    //apellido : "Coronel",
    //edad : 18
  //}
  //for (const propiedad in Fercho) {
    //console.log(`Key:${propiedad}, Value:${Fercho[propiedad]}`);
  //}
  
  //let cadena = "Hola Fercho";
  
  //for(const caracter of cadena){
    //console.log(caracter);
  //}
///////////////////////////////////Manejo de errores////////////////////////////////
//try {
//    console.log("En el try se agrega el codigo a evaluar");
//    cualError;
//} catch (error) {
  //  console.log("Catch, captura cualquier error surgido o lanzado en el try");
  //  console.log(error);
//}finally{
  //  console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
//}

//try {
    //let numero = "y";
    //if(isNaN(numero)){
      //  throw new Error("El caracter introducido no es numero");
    //}
  //  console.log(numero * numero);
//} catch (error) {
  //  console.log(`Se produjo el siguiente ${error}`);
//}
/////////////////////////////////////Break///////////////////////////////////////////////////////////
//const numeros = [1,2,3,4,5,6,7,8,9,10];

//for (let i = 0; i < numeros.length; i++) {
//    if(i === 6){
//        break;
//    }
//    console.log(numeros[i]);
//}
//    for (let i = 0; i < numeros.length; i++) {
//    if(i === 6){
//        continue;
//    }
//    console.log(numeros[i]);
//}
//////////////////////////////Destructuracion////////////////////////////////////////////////////////////////////////
//const numeros = [1, 2, 3];

//let uno = numeros[0];
//    dos = [1];
//    tres = [2];
//console.log(uno, dos, tres);

//const[one, two, three] = numeros;
//console.log(one, two, three);

//const persona = {
//    nombre: "Fernando",
//    apellido: "Coronel",
//    edad: 28
//}
//const {nombre, apellido, edad} = persona;
//console.log(nombre, apellido, edad);
/////////////////////////////Objetos Literales//////////////////////////////////////////////////////////////////////////
//let nombre = "Babotas";
//edad = 9;

//const gato = {
//    nombre : nombre,
//    edad : edad,
//    maullar: function(){
//        console.log("Miauu Miauu");
//    }
//}

//console.log(gato);
//gato.maullar()

//const cat = {
//nombre,
//edad,
//raza: "criollo",
//maullar(){
//    console.log("Miauu Miauu Miauu")
//}
//}

//console.log(cat);
//cat.maullar();
////////////////////////Parametros REST y Operador Spread//////////////////////////////////////////////////////////////////////////////
//function sumar(a, b, ...c){
//    let resultado = a + b;
//    c.forEach(function(n) {
//        resultado += n
//    });
//    return resultado;
//}
//console.log(sumar(1,2));
//console.log(sumar(1,2,3));
//console.log(sumar(1,2,3,4));
//console.log(sumar(1,2,3,4,5));
//console.log(sumar(1,2,3,4,5,6));
//console.log(sumar(1,2,3,4,5,6,7));
//console.log(sumar(1,2,3,4,5,6,7,8));
//console.log(sumar(1,2,3,4,5,6,7,8,9));
//console.log(sumar(1,2,3,4,5,6,7,8,9,10));

//const arr1 = [1,2,3,4,5];
//const arr2 = [6,7,8,9,0]
//console.log(arr1, arr2);


//const arr3 =[...arr1, ...arr2];
//console.log(arr3);

//const arr4 = [...arr1, ...arr2, ...arr3];
//console.log(arr4);
///////////////////////////Arrow Fumtions/////////////////////////////////////////////////////////////////////////////////////////
//const saludar = () => {console.log(`Hola`)
//}
//saludar();

//const saludar = (nombre) => console.log(`Hola ${nombre}`);
//saludar("Fernando");

//const sumar = function (a, b){
//    return a + b;
//}

//const sumar = (a,b) => a + b;
//console.log(sumar(9, 9));

//const functionDeVariasLineas = () =>{
//    console.log("uno");
//    console.log("dos");
//    console.log("tres");
//}

//functionDeVariasLineas();

//const numeros = [1,2,3,4,5];

//numeros.forEach((el, Index) => 
//console.log(`${el} esta en la posicion ${Index}`));
///////////////////////////Prototipos///////////////////////////////////////////////////////////////////////////////////////
//Programacion orientada a Objetos
//--Clases--Es un modelo a seguir
//--Objetos--Es una instancia de una clase
//---Atributos-- son variables dentro de un objeto
//---Metodos-- son las acciones que un objeto realiza(Son funciones dentro de un objeto)
//---------Funcion constructora(Forma parte de los parametros)------------//
//--Version 1
//function Animal(nombre, genero){
    //---Atributos
//    this.nombre = nombre;
//    this.genero = genero;
//    //---Metodos
//    this.sonar = function(){
//       console.log("Hago sonidos"); 
//    }
//}
//--version 2 donde asignamos los metodos al prototipo y no a la funcion(Mejora el rendimiento de programacion y ahorra codigo)
//function Animal(nombre, genero){
//    //---Atributos
//    this.nombre = nombre;
//    this.genero = genero;
//}
//    //---Metodos
//Animal.prototype.sonar = function(){
//    console.log("Hago sonidos"); 
//}
//    //Herencia Prototipica
//function Perros(nombre, genero, tamano){
//    this.super = Animal;
//    this.super(nombre, genero);
//    this.tamano= tamano;
//}
//function Gatos(nombre, genero, tamano){
//  this.super = Animal;
//  this.super(nombre, genero);
//  this.tamano= tamano;
//}


//Perros esta heredando de animal
//Perros.prototype = new Animal();
//Perros.prototype.constructor = Perros;
//Gatos.prototype.constructor = Gatos;

//Sobreescritura de metodos del prototipo
//Perros.prototype.sonar = function(){
//    console.log("Soy un perro y mi sonido es ladrar");
//}
//Gatos.prototype.sonar = function(){
//      console.log("Soy un gato y sonido es Maullar");    
//}
//Perros.prototype.ladrar = function(){
//    console.log("Guau Guau");
//}
//Gatos.prototype.Maullar = function(){
//      console.log("Miau Miau");
  
//}


//  const gato = new Gatos("Babotas", "Hembra", "Pequena"),
//        perro = new Perros("Chucky", "Macho", "Grande");  
//console.log(gato);
//console.log(perro);

//perro.sonar();
//perro.ladrar();
//gato.sonar();
//gato.Maullar();
//////////////////////////////Clases y Objetos//////////////////////////////////////////////////////////////////////////////////////////////////////
//class Animal{
//  constructor(nombre, genero){
//    this.nombre = nombre;
//    this.genero = genero;
//  }
//Metodos
//sonar(){
//  console.log("Hago sonido");
//}
//saludar(){
//  console.log(`Hola me llamo ${this.nombre}`);
//  }
//}
//class perro extends Animal{
//constructor(nombre, genero, tamano){
//  super(nombre,genero);
//  this.tamano = tamano;
//  }
//sonar(){
//  console.log("Soy un perro y mi sonido es un ladrido");
//  }
//ladrar(){
//  console.log("Guau Guau");
//  }
//} 
//const mimi = new Animal ("Mini", "Hembra"),
//      scooby = new perro("Scooby", "Macho","Gigante");
//console.log(mimi);
//mimi.saludar();
//mimi.sonar();
//console.log(scooby);
//scooby.saludar();
//scooby.sonar();
//scooby.ladrar();
////////////////////////////////Objeto Date/////////////////////////////////////////////////////////////////////
//console.log(Date());
//let fecha = new Date();  
//console.log(fecha);

//console.log(fecha.getDate());
//console.log(fecha.getMonth());
//console.log(fecha.getFullYear());
//console.log(fecha.getHours());
//console.log(fecha.getMinutes());
//console.log(fecha.getSeconds());
//console.log(fecha.getMilliseconds());
//console.log(fecha.toString());
//console.log(fecha.toDateString());
//console.log(fecha.toLocaleDateString());
//console.log(fecha.toLocaleTimeString());
////////////////////////////////Objeto Math/////////////////////////////////////////////////////////////////////
//console.log(Math.PI);
//console.log(Math.abs(7.7));
//console.log(Math.ceil(7.7));
//console.log(Math.floor(7.7));
//console.log(Math.round(7.7));
//console.log(Math.sqrt(7.7));
//console.log(Math.pow(7.7));
//console.log(Math.random(7.7));
//console.log(Math.random() * 1000);
//console.log(Math.random() * 1000);
//console.log(Math.round(Math.random() * 1000));
//console.log(Math.round(Math.random() * 1000));
//console.log(Math.round(Math.random() * 1000));//Metodo de un numero aleatorio entre el 0 y 1000 con numeros enteros
//console.log(Math.round(Math.random() * 1000));
/////////////////////////Operador Corto Circuito////////////////////////////////////////////////////////////////////////////////////////////////
//Corto Circuito OR ||
//function saludar(nombre){
//  nombre = nombre || "Desconocido";
//  console.log(`Hola ${nombre}`);
//}

//saludar("Fercho");
//saludar();
//console.log("Corto Circuito OR ||")
//console.log("cadena" || "Valor  de la derecha");
//console.log(19 || "Valor  de la derecha");
//console.log(-7 || "Valor  de la derecha");
//console.log(false || "Valor  de la derecha");
//console.log(null || "Valor  de la derecha");
//console.log(undefined || "Valor  de la derecha");
//console.log("" || "Valor  de la derecha");
//console.log(0 || "Valor  de la derecha");
//console.log("Corto Circuito AND &")
//Corto Circuito AND &
//console.log("cadena" && "Valor  de la derecha");
//console.log(19 && "Valor  de la derecha");
//console.log(-7 && "Valor  de la derecha");
//console.log(false && "Valor  de la derecha");
//console.log(null && "Valor  de la derecha");
//console.log(undefined && "Valor  de la derecha");
//console.log("" && "Valor  de la derecha");
//console.log(0 && "Valor  de la derecha");
/////////////////////////Alert, Confirm y Prompt////////////////////////////////////////////////////////////////////////////////////////////////
//window.alert("Esto es una alerta!!!");
//window.confirm("Esto es una confirmacion");
//window.prompt("Digite un numero");
//let alerta = alert("Hola esto es una alerta"),
//    confirmacion = confirm("Esto es una confirmacion"),
//    aviso = prompt("Digite un valor");

//console.log(alerta);
//console.log(confirmacion);
//console.log(aviso);
/////////////////////////Expresiones Regulares////////////////////////////////////////////////////////////////////////////////////////////////
//let cadena = "Lorem ipsum dolor, sit amet consectetur,adipisicing elit. Corrupti, harum Mollitia et, amet labore earum veniam facilis voluptas necessitatibus ut id iure dolorum delectus expedita at.Labore laboriosam quae similique"

//let expReg = new RegExp("lorem", "ig");
//console.log(expReg.test(cadena));
//console.log(expReg.exec(cadena));

//let expReg2 = /lorem/ig;
//console.log(expReg2.test(cadena));
//console.log(expReg2.exec(cadena));
///////////////////////Funciones Anonimas Autoejecutable///////////////////////////////////////////////////////////////////////////////////////////////////
//(function(d,w,c){
//  console.log("Mi primer IIFE");
//  console.log(d);
//  console.log(w);
//  c.log("Estes es un console.log")
//})(document,window,console);

//(function(){
//  console.log("Mi segundo IIFE")
//})();

//(function(){
//  console.log("Version Clasica ");
//})();

//((function(){
//  console.log("Version Crockford");
//})());

//+function(){
//  console.log("Version Unaria");
//}();

//!function(){
//  console.log("Version Facebook");
//}();
/////////////////////////////Modulos/////////////////////////////////////////////////////////////////////////////////////////




































































































































































































































































































































































































































































































































