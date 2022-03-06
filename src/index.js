import "./styles.css";

//media de nota escolar
// obter a media a partir de um array

// tabelas de notas
//0-59 :f
//60-69: d
// 70-79 : c
//80-89:b
//90-100 :a

const array = [70, 70, 100];

function mediaAluno(notas) {
  const media = calcularMedia(notas);
  if (media < 59) return "F";
  if (media < 69) return "D";
  if (media < 79) return "C";
  if (media < 89) return "B";
  return "A";
}

function calcularMedia(array) {
  let soma = 0;
  for (let valor of array) {
    soma += valor;
  }
  return soma / array.length;
}

console.log(mediaAluno(array));
