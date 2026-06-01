const pessoas = [
    { nome: "Ana", idade: 15 },
    { nome: "João", idade: 22 },
    { nome: "Marcos", idade: 18 },
    { nome: "Julia", idade: 14 }
  ];
  
  // buscar uma pessoa
  const busca = pessoas.find((pessoa) => pessoa.nome === "João");
  
  console.log("Pessoa encontrada:");
  console.log(busca);
  
  // filtrar maiores de idade
  const maiores = pessoas.filter((pessoa) => pessoa.idade >= 18);
  
  console.log("\nMaiores de idade:");
  console.log(maiores);