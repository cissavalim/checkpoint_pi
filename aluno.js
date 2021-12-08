function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  this.calcularMedia = () => {
    return (
      this.notas.reduce((acc, num) => {
        return acc + num;
      }) / this.notas.length
    );
  };
  this.faltas = () => {
    this.faltas++;
  };
}

module.exports = Aluno;
