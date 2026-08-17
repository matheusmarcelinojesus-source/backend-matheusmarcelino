let alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 6 },
    { nome: "Pedro", nota: 7.5 },
    { nome: "Ana", nota: 5 },
    { nome: "Carlos", nota: 9 }
];

let alunosComSituacao = alunos.map(aluno => {
    return {
        ...aluno,
        situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(alunosComSituacao);

let aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");

console.log(`Quantidade de aprovados: ${aprovados.length}`);

let somaNotas = 0;

alunos.forEach(aluno => {
    somaNotas += aluno.nota;
});

let media = somaNotas / alunos.length;

console.log(`Média geral: ${media}`);