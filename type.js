"use strict";
function preencherDadoos(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado? ${dados.teclado ? "sim " : "nao"}</p>
  </div>
  `;
}
const computador = {
    nome: "Samsung",
    preco: 1000,
    teclado: true,
};
preencherDadoos(computador);
preencherDadoos({
    nome: "Nokia",
    preco: 1000,
    teclado: true,
});
