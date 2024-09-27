function comprar() {
  let tipo = document.getElementById("tipo-ingresso").value;
  let qtd = parseInt(document.getElementById("qtd").value);

  if (tipo === "pista") {
    comprarPista(qtd);
  } else if (tipo === "superior") {
    comprarSuperior(qtd);
  } else if (tipo === "inferior") {
    comprarInferior(qtd);
  }


function comprarPista(qtd) {
  let ingresso = parseInt(document.getElementById("qtd-pista").textContent);
  if (qtd > ingresso || ingresso > 0) {
    alert("Quantidade indisponível para a compra");	
  } else {
      ingresso = ingresso - qtd;
      document.getElementById("qtd-pista").textContent = ingresso;
      alert("Comprou o ingresso");
  }
}

function comprarSuperior(qtd) {
  let ingresso = parseInt(document.getElementById("qtd-superior").textContent);
  if (qtd > ingresso || ingresso > 0) {
    alert("Quantidade indisponível para a compra");
  } else {
      ingresso = ingresso - qtd;
      document.getElementById("qtd-superior").textContent = ingresso;
      alert("Comprou o ingresso");
  }
}

function comprarInferior(qtd) {
  let ingresso = parseInt(document.getElementById("qtd-inferior").textContent);
  if (qtd > ingresso || ingresso > 0) {
    alert("Quantidade indisponível para a compra");
  } else {
      ingresso = ingresso - qtd;
      document.getElementById("qtd-inferior").textContent = ingresso;
      alert("Comprou o ingresso");
  }
}   
}