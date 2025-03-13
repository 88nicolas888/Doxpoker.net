let score = 0;

function createCoin() {
    const coin = document.createElement('div');
    coin.classList.add('coin');
    coin.style.left = Math.random() * 100 + '%';  // Posição aleatória no eixo X
    coin.style.animationDuration = (Math.random() * (7 - 3) + 3) + 's';  // Duração aleatória entre 3s e 7s

    coin.addEventListener('click', function() {
        score += (Math.random() < 0.01) ? 25 : 1;  // Chance de 1% para 25 GCT
        document.getElementById('score').innerText = score;
        coin.remove();  // Remove a ficha ao ser clicada
    });

    document.getElementById('gameArea').appendChild(coin);

    setTimeout(() => {
        coin.remove();  // Remove a ficha se não for clicada em 7 segundos
    }, 7000);
}

setInterval(createCoin, 2000);  // Cria uma nova ficha a cada 2 segundos