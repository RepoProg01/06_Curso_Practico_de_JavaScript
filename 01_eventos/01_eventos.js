const h1 = document.querySelector("h1");
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

