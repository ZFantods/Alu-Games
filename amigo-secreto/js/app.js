let sorteados = [];

function adicionar() {
  let amigo = document.getElementById("nome-amigo");
  let listaAmigos = document.getElementById("lista-amigos");
  sorteados.push(amigo.value);
  if (listaAmigos.textContent == "" || listaAmigos.textContent == null) {
    listaAmigos.textContent = amigo.value;
  } else {
    listaAmigos.textContent = listaAmigos.textContent + "," + amigo.value;
  }
  alert("Amigo adicionado com sucesso");
  amigo.value = "";
}

function reiniciar() {
  let listaAmigos = document.getElementById("lista-amigos");
  listaAmigos.innerHTML = "";
}

function sortear() {
  let listaAmigos = document.getElementById("lista-amigos");
  let amigos = listaAmigos.textContent.split(",");
  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];
    sorteados.push(amigo);
  }
  listaAmigos.innerHTML = "";
  sorteados.sort();
  for (let i = 0; i < sorteados.length; i++) {
    listaAmigos.innerHTML += `<p>${sorteados[i]}</p>`;
  }
}