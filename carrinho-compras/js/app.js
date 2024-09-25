function adicionar() {
  let nomeProduto = document.getElementById("produto");
  let quantidade = document.getElementById("quantidade");
  if (nomeProduto.value === "" || quantidade.value === "" || nomeProduto.value === 0 || quantidade.value > 100) {
    alert("Preencha todos os campos");
    return;
  }
}

function limpar() {
  document.getElementById("lista-produtos").innerHTML = "";
  document.getElementById("valor-total").innerHTML = "";
  document.getElementById("quantidade-total").innerHTML = "";
}