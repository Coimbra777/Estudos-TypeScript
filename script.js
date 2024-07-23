"use strict";
// function somar(a: number, b: number) {
//   return a + b;
// }
// console.log(somar(10, 50));
// // ANNOTATION
// const produto: string = "Livro";
// const preco: number = 100;
// console.log(produto, preco);
// const carro: {
//   marca: string;
//   preco: number;
//   portas: number;
// } = {
//   marca: "Samsung",
//   preco: 1000,
//   portas: 5,
// };
// console.log(carro);
// function normalizarTextos(texto: string) {
//   return texto.trim().toLowerCase();
// }
// console.log(normalizarTextos("TESTE2"));
const input = document.querySelector("input");
const total = localStorage.getItem("total");
if (input && total) {
    input.value = total;
    calcularGanho(+input.value);
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem("total", input.value);
        calcularGanho(+input.value);
    }
}
if (input) {
    input.addEventListener("keyup", totalMudou);
}
