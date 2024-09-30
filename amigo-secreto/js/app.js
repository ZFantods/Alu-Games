let amigos = [];

function mudarTexto(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function adicionar() {
  let elemento = document.getElementById("nome-amigo");
  let amigo = elemento.value;
  if (amigo == "") {
    alert("Por favor, insira o nome do amigo!");
    return;
  }

  amigo = mudarTexto(amigo);

  if (amigos.includes(amigo)) {
    alert("Já existe um amigo com esse nome!");
    return;
  }

  let lista = document.getElementById("lista-amigos");

  amigos.push(amigo);

  if (lista.textContent == "" || lista.textContent == undefined) {
    lista.textContent = amigo;
  } else {
    lista.textContent = lista.textContent + ", " + amigo;
  }

  elemento.value = "";

  atualizarLista();
  atualizarSorteio();
}

function sortear() {
  if (amigos.length < 4) {
    alert("Adicione no mínimo 4 pessoas!");
    atualizarLista();
    atualizarSorteio();
    return;
  }
  embaralhar(amigos);

  let sorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[0] + "<br/>";
    } else {
      sorteio.innerHTML =
        sorteio.innerHTML + amigos[i] + " --> " + amigos[i + 1] + "<br/>";
    }
  }
}

function excluirAmigo(index) {
  amigos.splice(index, 1);
  atualizarLista();
  atualizarSorteio();
}

function embaralhar(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);
    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}

function atualizarSorteio() {
  let sorteio = document.getElementById("lista-sorteio");
  sorteio.innerHTML = "";
}

function atualizarLista() {
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let paragrafo = document.createElement("p");
    paragrafo.textContent = amigos[i];

    paragrafo.addEventListener("click", function () {
      excluirAmigo(i);
    });

    lista.appendChild(paragrafo);
  }
}

function reiniciar() {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = "";
  document.getElementById("lista-sorteio").innerHTML = "";
}
