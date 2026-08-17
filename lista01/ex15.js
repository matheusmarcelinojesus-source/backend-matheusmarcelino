let produtos = [
    { id: 1, nome: "Teclado", preco: 80 },
    { id: 2, nome: "Mouse", preco: 120 },
    { id: 3, nome: "Monitor", preco: 800 },
    { id: 4, nome: "Fone", preco: 150 },
    { id: 5, nome: "Mousepad", preco: 50 }
];

// a) Produto de id 3
let produto = produtos.find(produto => produto.id === 3);
console.log("Produto de ID 3:");
console.log(produto);

// b) Produtos com preço acima de 100
let produtosCaros = produtos.filter(produto => produto.preco > 100);
console.log("Produtos acima de R$100:");
console.log(produtosCaros);

// c) Array somente com os nomes
let nomes = produtos.map(produto => produto.nome);
console.log("Nomes:");
console.log(nomes);

// d) Exibir cada produto formatado
console.log("Produtos:");

produtos.forEach(produto => {
    console.log(`${produto.id} - ${produto.nome} - R$ ${produto.preco}`);
});