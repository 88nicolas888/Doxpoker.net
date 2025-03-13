// Configuração do canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Função para desenhar moedas flutuantes
class Coin {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 30;
        this.speed = Math.random() * 1.5 + 0.5;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'gold';
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'gold';
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
        if (this.y < -this.radius) {
            this.y = canvas.height + this.radius;
        }
        this.draw();
    }
}

const coins = [];
for (let i = 0; i < 10; i++) {
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;
    coins.push(new Coin(x, y));
}

// Função para desenhar efeitos de blockchain
function drawBlockchainEffect() {
    ctx.globalAlpha = 0.05;
    ctx.fillStyle = '#00ff99';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
}

// Função principal de animação
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBlockchainEffect();

    coins.forEach(coin => {
        coin.update();
    });

    requestAnimationFrame(animate);
}

// Iniciar o jogo
animate();
