let totalGeral = 0;
limpar();

function adicionar() {
  // adicionar produto ao carrinho
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0]; 
  let valorUnitario = produto.split("R$")[1]; 
  let quantidade = document.getElementById("quantidade");
  if (
    quantidade.value < 1 ||
    quantidade.value > 100 ||
    isNaN(quantidade.value)
  ) {
    alert("Insira a quantidade do produto válida"); 
    return;
  }
  let preco = quantidade.value * valorUnitario; 
  let carrinho = document.getElementById("lista-produtos"); 
  carrinho.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`; // adicionar produto ao carrinho
  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById("valor-total");
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById("quantidade").value = 0; // limpar o campo de quantidade
}

function limpar() {
  // limpar o formulário
  totalGeral = 0;
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "R$0.00";
}
