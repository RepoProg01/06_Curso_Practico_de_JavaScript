// function usuario(name, lastname, nickname,){
//     let completeName = name + " " + lastname;
//     console.log(`Mi nombre es ${completeName} pero me dicen ${nickname}`);
// };
// usuario("Luis","Padilla","alex");

// --------------------------------------------------------------------------------------------

// let tipoDeSuscripcion = "Basic";

// if(tipoDeSuscripcion == "free"){
//     console.log("Solo puedes tomar los cursos gratis");
// }
// else if(tipoDeSuscripcion == "Basic"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// }
// else if(tipoDeSuscripcion == "Expert"){
//     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// }
// else if(tipoDeSuscripcion == "ExpertPlus"){
//     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// }

//-----------------------------------------------------------------------------------------------------
// let Suscripcion = "Basi";

// function tipoDeSuscripcion(tipo){
//     if(tipo == "free"){
//         console.log("Solo puedes tomar los cursos gratis");
//         return;
//     }
//     if(tipo == "Basic"){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//         return;
//     }
//     if(tipo == "Expert"){
//         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//         return;
//     }
//     if(tipo == "ExpertPlus"){
//         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//         return;
//     }
//     console.warn("Ocion no encontrada");
// }

// tipoDeSuscripcion(Suscripcion);
//-----------------------------------------------------------------------------------------------------
// let seleccion = "ExpertPlus";
// let opciones = [
//     {free: "Solo puedes tomar los cursos gratis"},
//     {Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes"},
//     {Expert: "Puedes tomar casi todos los cursos de Platzi durante un año"},
//     {ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"}
// ];

// function convirtiendoAarray(sel){
//     for(let item of sel){
//         if(Object.keys(item) == seleccion){
//             console.log(Object.values(item));
//         }
//     }
// }
// convirtiendoAarray(opciones);
//----------------------ejemplo 2------------------------------
// let opciones = {
//     free: "Solo puedes tomar los cursos gratis",
//     Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
//     Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
//     ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
// };

// function imprimiendoObjeto(sel){
//     if(opciones[sel]){
//         console.log(opciones[sel]);
//     }else{
//         console.log("No encontrado");
//     }
// }
// imprimiendoObjeto(seleccion);
//-----------------------------------------------------------------------------------------------------
// let a = 0;
// while(a < 5){
//     console.log("El valor de i es:" + " " + a);
//     a++;
// }

// let i = 10;
// while(i > 1){
//     console.log(`El valor de i es: ${i}`);
//     i--;
// }
//-----------------------------------------------------------------------------------------------------
// let lock = true;
// do{
//     let pregunta = prompt("Cuanto es 2 + 2  ");
//     if(pregunta == 4){
//         console.log("Felicidades tu respuesta es correcta")
//         lock = false
//     }
// }
// while(lock);
//-----------------------------------------------------------------------------------------------------
// let frutas = ["fresa","manzana","pera","durazno"];

// function primerNumero(array){
//     console.log(array[0]);
// };
// primerNumero(frutas);
//-----------------------------------------------------------------------------------------------------
// let frutas = ["fresa","manzana","pera","durazno"];

// for(item of frutas){
//     console.log(item);
// }
//-----------------------------------------------------------------------------------------------------

// let objeto ={
//     nombre: "Luis",
//     apellido: "Padilla",
//     curso: "javascript"
// }

// function imprimir(obj){
//     array = Object.values(obj);
//     for(item of array){
//         console.log(item);
//     }
// }

// imprimir(objeto)

//------------opcion 2-----------------------

// function imprimir(obj){
//     for(let item in obj){
//         console.log(obj[item]);
//     };
// }

// imprimir(objeto);

//------------opcion 3-------------------------
// function imprimir(obj) {
//     if (typeof(obj) == "object" && Array.isArray(obj) == false) {
//         let keys = Object.keys(obj);
//         for (let key of keys) {
//             console.log(`${key}: ${obj[key]}`);
//         }
//     }
//     else {
//         console.log("debe de ser un objeto");
//     }
// }

// imprimir(objeto);
