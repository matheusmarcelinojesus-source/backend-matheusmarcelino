const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Headset", preco: 150 }
  ];
  
  console.log("=== LISTA DE PRODUTOS ===");
  
  produtos.forEach((produto, index) => {
    console.log(
      `${index + 1}. ${produto.nome} - R$ ${produto.preco}`
    );
  });