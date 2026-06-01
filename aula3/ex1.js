const aluno = {
    nome: "Carlos",
    idade: 17,
    curso: "Informática",
    notas: [8, 7.5, 9]
  };
  
  const media =
    aluno.notas.reduce((total, nota) => total + nota, 0) /
    aluno.notas.length;
  
  console.log("=== FICHA DO ALUNO ===");
  console.log(`Nome: ${aluno.nome}`);
  console.log(`Idade: ${aluno.idade}`);
  console.log(`Curso: ${aluno.curso}`);
  console.log(`Média: ${media.toFixed(1)}`);