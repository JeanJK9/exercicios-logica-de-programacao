const jogos = {
    1: { nome: "Monopoly", alugado: false },
    2: { nome: "Ticket to Ride", alugado: false },
    3: { nome: "Takenoko", alugado: true }
};

function alterarStatus(id) {
    const jogo = jogos[id];

    if (jogo.alugado) {
        jogo.alugado = false;
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__button').textContent = 'Alugar';
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__button').classList.remove('dashboard__item__button--return');
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__img').classList.remove('dashboard__item__img--rented');
    } else {
        jogo.alugado = true;
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__button').textContent = 'Devolver';
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__button').classList.add('dashboard__item__button--return');
        document.getElementById(`game-${id}`).querySelector('.dashboard__item__img').classList.add('dashboard__item__img--rented');
    }
}
