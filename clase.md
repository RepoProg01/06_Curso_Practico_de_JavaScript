## Que es el DOM? (Document Object Model. por sus siglas en inglés)

* El DOM es una representación del documento HTML como un grupo de nodos y objetos. 

* Determinando así la forma en la cual se puede acceder y modificar la estructura, contenido y estilo de un documento HTML. 

* En palabras mas sencillas el DOM le dice a un programa como JavaScript que nodo o parte del HTML esta leyendo (como puede ser un párrafo o un titulo o una sección, etc.) y es el mismo DOM el que modela como un objeto (con sus propiedades y métodos) esa parte del documento. 

* Con JS se accede a esas propiedades y se invoca esos métodos para modificar, eliminar, crear, etc. elementos en una pagina web.

## Metodos del DOM

###  Document.getElementById()
* Devuelve una referencia de objeto al elemento identificado.
### Document.getElementsByClassName()
* Devuelve una lista de elementos con el nombre de clase dado.
### Document.getSelection()
* Devuelve un objeto Selection que representa el rango de texto seleccionado por el usuario o la posición actual del signo de intercalación.
### Document.querySelector()
* Devuelve el primer nodo Element dentro del documento, en el orden del documento, que coincide con los selectores especificados.
Y más…

```js
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const pcl = document.querySelector(".pcl");
const pid = document.querySelector("#pid");
const input = document.querySelector("input");
```

## Escribir HTML desde Javascript
### 1. innerHTML
* Inserta codigo HTML en tu HTML
```js
//Sintaxi:
elemento.innerHTML = 'Nuevo texto';
```

### 2. innerText
* Inserta Texto plano en tu HTML

```js
//Sintaxi:
elemento.innerText = 'Nuevo texto';
```
### 3. getAttribute()
* Lee el valor de un atributo que tiene un elemento cuando indicamos su propiedad en parentesis
```js
//Sintaxi:
elemento.getAttribute('class');
```
### 4. setAttribute()
* Cambia el valor de un atributo que tiene un elemento cuando le indicamos su nuevo valor en parentesis
```js
//Sintaxi:
elemento.setAttribute('class', 'nuevo-valor');
```
### 5. classList.add()
* Para agregar un valor a una clase existente en un elemento
```js
//Sintaxi:
elemento.classList.add('nuevo-valor1');
```
### 6. classList.remove()
* Para eliminar el valor descrito en parentesis a la clase de un elemento
```js
//Sintaxi:
elemento.classList.remove('nueva-valor1');
```
### 7. classList.toggle(‘valor’)
* Si tiene un valor descrito entre parentesis se lo quita, o si no lo tiene se lo coloca:
```js
//Sintaxi:
elemento.classList.toggle('valor');
```
### 8. classList.contains(‘valor’)
* Devuelve true o false Si una propiedad tiene un valor descrito entre parentesis
```js
//Sintaxi:
elemento.classList.contains('valor');
```
### 9. .value = ‘valor’
* Colocarle un valor a un elemento, usualmente colocado en inputs
```js
//Sintaxi:
elemento.value = '12345';
```
### 10. .createElement()
* Crea un elemento HTML ( < img >, < section >, < header >, < div >, etc )
```js
//Sintaxi:
document.createElement(img);
```
### 11. .append()
* Puede agregar al documento uno o varios elementos creado previamente al agregarlo entre parentesis
```js
//Sintaxi:
elemento.append(img, img2);
```
### 12. .appendChild()
* Puede agregar al documento solo un elemento creado previamente al agregarlo entre parentesis
```js
//Sintaxi:
elemento.append(img);
```

## Escuchando eventos

## addEventListener:
* Este metodo sirve para escuchar cualquier tipo de evento que ocurra dentro de un objeto, estos objetos pueden ser un elemento HTML, una ventana, el mismo documento, un XMLhttpRequest.

Los eventos pueden ser:

### blur: 
* Cuando el elemento pierde el foco.

### click: 
* El usuario hace clic sobre el elemento.

## dblclick: 
* El usuario hace doble clic sobre el elemento.

## focus: 
* El elemento gana el foco.

## keydown: 
* El usuario presiona una tecla.

## keypress: 
* El usuario presiona una tecla y la mantiene pulsada.

## keyup: 
* El usuario libera la tecla.

## load: 
* El documento termina su carga.

## mousedown: 
* El usuario presiona el botón del ratón en un elemento.

## mousemove: 
* El usuario mueve el puntero del ratón sobre un elemento.

## mouseout: 
* El usuario mueve el puntero fuera de un elemento.

## mouseover: 
* El usuario mantiene el puntero sobre un elemento.

## mouseup: 
* El usuario libera el botón pulsado del ratón sobre un elemento.

## unload: 
* El documento se descarga, bien porque se cierra la ventana, bien porque se navega a otra página.

## Syntaxis :
```js
  const btn = document.querySelector("#btn"); 
  btn.addEventListener(evento, funcion);
```

### Para pasar los strings capturados en el input a valor numerico podemos usar las funciones :
* Number() 
```js
Number(input1.value)
```
* parseInt() quedaria:
```js
parseInt(input1.value)
```

* Ejemplo 1 usando onclick=" " en el boton del html
### html
```html
    <input id="calculo1" type="text" placeholder="Primer numero">
    <input id="calculo2" type="text" placeholder="Segundo numero">
    <button onclick="suma()" id="btnCalcular">Calcular</button>
    <p id="result"></p>
```
### javascript
```js
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

function suma(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let res = num1 + num2;
    result.innerHTML = `Resultado de la operacion es : ${res}`;
}
```
* Ejemplo 2 manipulando el boton desde java script con addEventListener
### html
```html
    <input id="calculo1" type="text" placeholder="Primer numero">
    <input id="calculo2" type="text" placeholder="Segundo numero">
    <button id="btnCalcular">Calcular</button>
    <p id="result"></p>
```
### javascript

* Con funcion
```js
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

btn.addEventListener("click", onclick);

function onclick(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let res = num1 + num2;
    result.innerHTML = `Resultado de la operacion es : ${res}`;
};
```
* Con funcion flecha
```js
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

btn.addEventListener("click", ()=>{
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let res = num1 + num2;
    result.innerHTML = `Resultado de la operacion es : ${res}`;
});
```
* Con formularios (boton submit)
### html
```html
    <h1>Manipulacion del DOM</h1>

    <form id="form" action="">
        <label for="calculo1">Ingresa 1er numero</label>
        <input name="primero" id="calculo1" type="text" placeholder="Primer numero">
        <label for="calculo2">Ingresa 2do numero</label>
        <input name="segundo" id="calculo2" type="text" placeholder="Segundo numero">
        <button type="submit" id="btnCalcular">Calcular</button>
    </form>
    <p id="result"></p>
```
### javascript
```js
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

form.addEventListener("submit", suma);

function suma(event){
    console.log(event);
    event.preventDefault();
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let res = num1 + num2;
    result.innerHTML = `Resultado de la operacion es : ${res}`;
}
```
* Con formularios (solo cambiando el tipo de boton)
### html
```html
    <h1>Manipulacion del DOM</h1>

    <form id="form" action="">
        <label for="calculo1">Ingresa 1er numero</label>
        <input name="primero" id="calculo1" type="text" placeholder="Primer numero">
        <label for="calculo2">Ingresa 2do numero</label>
        <input name="segundo" id="calculo2" type="text" placeholder="Segundo numero">
        <button type="button" id="btnCalcular">Calcular</button>
    </form>
    <p id="result"></p>
```
### javascript
```js
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");

btn.addEventListener("click", onclick);

function onclick(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let res = num1 + num2;
    result.innerHTML = `Resultado de la operacion es : ${res}`;
};
```
