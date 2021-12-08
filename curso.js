const Aluno = require("./aluno");

function Curso(nomeCurso, notaAprovacao, faltasMaximas, listaAlunos = []) {
  this.nomeCurso = nomeCurso;
  this.notaAprovacao = notaAprovacao;
  this.faltasMaximas = faltasMaximas;
  this.listaAlunos = listaAlunos;

  this.adicionarAluno = (nome, faltas, notas) => {
    this.listaAlunos.push(new Aluno(nome, faltas, notas));
  };

  this.resultadoAprovacao = (nome) => {
    let aluno = this.listaAlunos.find((x) => x.nome === nome);
    return (aluno.calcularMedia >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) || (aluno.faltas === this.faltasMaximas && aluno.calcularMedia >= this.notaAprovacao * 1.1);
  };

  this.listaAprovados = () => {
    return this.listaAlunos.map((item) => {
      return (item.calcularMedia >= this.notaAprovacao && item.faltas < this.faltasMaximas) || (item.faltas === this.faltasMaximas && item.calcularMedia >= this.notaAprovacao * 1.1);
    });
  };
}

module.exports = Curso;
