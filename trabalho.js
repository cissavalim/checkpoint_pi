const Curso = require("./curso");

let listaAlunos = [
  { nome: "Cecilia Valim", faltas: 1, notas: [7, 8, 9] },
  { nome: "Rodrigo Escobar", faltas: 2, notas: [6, 6, 9] },
  { nome: "Marcos Fonseca", faltas: 3, notas: [10, 5, 6] },
  { nome: "Ruggiero Stello", faltas: 4, notas: [1, 7, 10] },
  { nome: "Geyson Kaio", faltas: 5, notas: [10, 5, 0] },
  { nome: "Guilherme Carvalho", faltas: 6, notas: [10, 10, 10] },
];

let pi = new Curso("pi", 1, 2, listaAlunos);

console.log(pi.resultadoAprovacao("Cecilia Valim"));
