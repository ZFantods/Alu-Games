function alterarStatus(id) {
  let jogoClick = document.getElementById(`game-${id}`);
  let imagem = jogoClick.querySelector(".dashboard__item__img");
  let botao = jogoClick.querySelector(".dashboard__item__button");
  let nomeJogo = jogoClick.querySelector(".dashboard__item__name");

  if (imagem.classList.contains("dashboard__item__img--rented")) {
    if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    }
  } else {
    imagem.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  }
}
