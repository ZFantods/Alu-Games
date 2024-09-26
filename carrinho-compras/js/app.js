function adicionar() {
  // adicionar produto ao carrinho
  let produto = document.getElementById("produto").value;
  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let quantidade = document.getElementById("quantidade");
  if (quantidade.value < 1 || quantidade.value > 100 || isNaN(quantidade.value)) {
    alert("Insira a quantidade do produto válida");
    return;
  }
  let preco = quantidade.value * valorUnitario;
  let verificar = document.getElementById("lista-produtos");
  verificar.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
  </section>`;
  document.getElementById("valor-total").innerHTML = `R$${preco * quantidade.value}`;
  document.getElementById("quantidade-total").innerHTML = `${quantidade.value}`;

}


function limpar() {
  // limpar o formulário
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "";
  document.getElementById("quantidade-total").innerHTML = "";
}