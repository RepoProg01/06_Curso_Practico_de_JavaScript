## Que es una variable y para que nos sirve ?
Las variables son espacios en memoria donde podemos guardar informacion de diferentes tipos de datos como:
* caracteres
* string
* boolean
* numeros
* funciones
* etc

## Cual es la diferencia entre declarar e inicializar una variable ?
* Crear una variable se le llama declarar y asignarle un valor se le llama inicializar, y si le cambiamos el valor otra vez se le llama reinicializar

## Cual es la diferencia entre sumar numeros y concatenar srings ?

* La diferencia es que cuando usamos el operador + es de suma cuando lo usamos con numeros, pero es de concatenacion cuando lo usamos con strings.

## Cual operador me permite sumar y concarenar ?

* El operador que nos permitee sumar o concatenar es el signo +

## Determina que nombre y tipo de dato para almacenar en variables la siguiente informacion ?
* nombre --STRING
* apellido --STRING
* nombre de usuario --STRING
* edad --NUMBER
* correo electronico --STRING
* mayor de edad --BOOLEAN
* dinero ahorrado --NUMBER
* deudas --NUMBER

## Traduce a codigo javascript las variables anteriores
```js
let nombre = "Luis";
let apellido = "Padilla";
let nombreDeUsuario = "Luis32";
let edad = 45;
let email = "luis@aol.com";
let mayoriaDeEdad = true;
let dineroAhorrado = 300000;
let deudas = 0;
```
## Calcula e imprime las siguientes variables a partir de las vaeiables del ejemplo anterior
* nombre completo
* dinero real (dinero ahorrado menos deudas)
```js
let nombreCompleto = nombre + apellido;
let dineroReal = dineroAhorrado - deudas;
```
## Que es una funcion ?

Es la forma en que encapsulamos bloques de codigo para que sean reutilizables y ejecutables en el futuro.

## Cuando me sirve usar una funcion en mi codigo ?

Cuando tenemos bloques de codigo o variables que se repiten o muy parecidos, con solo diferencias minimas, que podemos tal vez unificar con parametros y argumentos, asi podemos encapsular estos bloques de codigo para poder reutilizarlos en un futuro.

## Cual es la diferencia entre parametros y argumentos de una funcion ?

Se le llama parametros cuando creamos la funcion y argumentos los valores que mandamos cuando las llamamos.

## Convierte el siguiente codigo en una funcion, pero cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion

>const name = "Luis";
const lastname = "Padilla";
const completeName = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

```js
function usuario(name, lastname, nickname,){
    let completeName = name + " " + lastname;
    console.log(`Mi nombre es ${completeName} pero me dicen ${nickname}`);
};
```
## Que es un condicional ?

* Es un bloque de codigo con el cual validamos o condicionamos una decision.

## Que tipo de condicionales existen en javascript y cuales son sus diferencias ?

* Los tipos de condicionale son if, else, else if, switch.

* El condicional if nos permite hacer  validacions completamente distintas ( si asi se requiere ) en cada validacion

* El condicional switch todos los casos se comparan con la misma variable o condicion que definimos en el switch.

## Puedo combinar funciones y condicionales ?
* Si se pueden combinar las funciones y los condicionales.

## Replica el comportamiento del siguiente codigo que usa la sentencia switch utilizando if, else y else if
```js
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```js
let tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == "free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if(tipoDeSuscripcion == "Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
else if(tipoDeSuscripcion == "Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
else if(tipoDeSuscripcion == "ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```
### 
Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)
```js
let Suscripcion = "Basic";

function tipoDeSuscripcion(tipo){
    if(tipo == "free"){
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(tipo == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(tipo == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    if(tipo == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }
    console.warn("Ocion no encontrada");
}

tipoDeSuscripcion(Suscripcion);
```
### Replica el mismo comportamiento con arrays u objetos o un solo condicional
* Con un objeto dentro de un array y convirtiendo el objeto a array :
```js
let seleccion = "ExpertPlus";
let opciones = [
    {free: "Solo puedes tomar los cursos gratis"},
    {Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
    {Expert: "Puedes tomar casi todos los cursos de Platzi durante un año"},
    {ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
];

function convirtiendoAarray(sel){
    for(let item of sel){
        if(Object.keys(item) == seleccion){
            console.log(Object.values(item));
            return;
        }
        console.log("No encontrado");
    }
}
convirtiendoAarray(opciones);
```
* Con un objeto y un solo if :
```js
 let seleccion = "ExpertPlus";
let opciones = {
    free: "Solo puedes tomar los cursos gratis",
    Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

function imprimiendoObjeto(sel){
    if(opciones[sel]){
        console.log(opciones[sel]);
        return;
    }
    console.log("No encontrado");
}
imprimiendoObjeto(seleccion);
```
## Que es un ciclo ?
* La forma de ejecutar un bloque de código mientras una condición sea verdadera o se cumpla.

## Que tipo de ciclos existen en javascript ?
* Ciclo for 
* while 
* do while.
## Que es un ciclo infinito y por que es un problema ?
* Es cuando la validacion de nuestro condicional nunca se cumple y terminara bloqueando nuestro navegador por tanta ejecucion de ese bloque de codigo
## Puedo mezclar ciclos y condicionales ?
* Si auque los ciclos sean un tipo de condicionales, podemos usar condicionales dentro de los ciclos sin problema. 

## Replica el comportamiento de los siguientes ciclos for utilizando while
```js
//---------------------------------------------------------------
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
//---------------------------------------------------------------
```
Quedaria asi :
```js
let i = 0;
while(i < 5){
    console.log("El valor de i es:" + " " + i);
    i++;
}
```
```js

//---------------------------------------------------------------
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//---------------------------------------------------------------
```
Quedaria asi :
```js
let i = 10;
while(i > 1){
    console.log(`El valor de i es: ${i}`);
    i--;
}
```

## Escribe un codigo en javascript que le pregunte a los usuarios cuanto es 2 + 2 Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volveremos a empezar
* Usando un do while 
```js
let lock = true;
do{
    let pregunta = prompt("Cuanto es 2 + 2  ");
    if(pregunta == 4){
        console.log("Felicidades tu respuesta es correcta")
        lock = false
    }
}
while(lock);
```
Usando un while :
```js
let respuesta;
while(respuesta != 4){
    let pregunta = prompt("Cuanto es 2 + 2  ");
    respuesta = pregunta;
}
console.log("Felicidades tu respuesta es correcta")
```
## Que es un array ?
* Es una lista de elementos.
```js
let array = ["Luis", true, 45, false];
```
## Que es un objeto ?
* Es una lista de elemntos  pero cada elemento tiene un nombre clave
```js
let objeto = {
    nombre: "Luis",
    apellido: "Padilla",
    cursos: ["html","css"]
}
```
## Cuando es mejor usar objetos o arrays ?
* Arrays cundo lo que haremos en un elemento es lo mismo que en todo lo demas (la regla se puede inclumpir).

* Mientras que un objeto cuando los nombres de cada elemento son importantes para nuestro algoritmo.
## Puedo mezclar arrays con objetos o incluso objetos con arrays ?
* Si los arrays pueden guardar objetos. 
Y los objetos pueden guardar arrays entre sus propiedades.
## Crea una funcion que pueda recibir cualquier array como parametro e imprima su primer elemento.
```js
let frutas = ["fresa","manzana","pera","durazno"];

function primerNumero(array){
    console.log(array[0]);
};
primerNumero(frutas);
```
## Crea una funcion que pueda recibir cualquier array como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo)
```js
let frutas = ["fresa","manzana","pera","durazno"];

function mostrar(array){
    for(item of array){
    console.log(item);
    }
};

mostrar(frutas);
```
## Crea una funcion que pueda recibir cualquier objeto como parametro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo)

Se convierte el objeto a array 
```js
let objeto ={
    nombre: "Luis",
    apellido: "Padilla",
    curso: "javascript"
}

function imprimir(obj){
    array = Object.values(obj);
    for(item of array){
        console.log(item);
    }
}

imprimir(objeto)
```
* O tambien asi sin convertirlo a un array :
```js
function imprimir(obj){
    for(let item in obj){
        console.log(obj[item]);
    };
}

imprimir(objeto);
```
* O asi con su llave valor y comprobando que tiene que ser un objeto el que le demos como argumento :
```js
function imprimir(obj) {
    if (typeof(obj) == "object" && Array.isArray(obj) == false) {
        let keys = Object.keys(obj);
        for (let key of keys) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
    else {
        console.log("debe de ser un objeto");
    }
}

imprimir(objeto);
```
