// Pega o usuário logado
let currentUser = localStorage.getItem("currentUser");
if (!currentUser) {
    window.location.href = "index.html"; // Volta para login se não estiver logado
}

let users = JSON.parse(localStorage.getItem("users")) || [];
let user = users.find(u => u.username === currentUser);
let gctCount = user.gct || 0;

document.getElementById("gct-count").innerText = `GCT: ${gctCount}`;

function dropToken() {
    let token = document.createElement("div");
    token.classList.add("token");
    
    let isSpecial = Math.random() < 0.01; // 1% de chance de ser 25 GCT
    token.dataset.value = isSpecial ? 25 : 1;
    token.style.background = isSpecial ? "red" : "gold";

    token.style.left = Math.random() * 90 + "%";
    token.style.animationDuration = Math.random() * 4 + 3 + "s"; // Entre 3 e 7 segundos

    token.addEventListener("click", function () {
        let value = parseInt(this.dataset.value);
        gctCount += value;
        document.getElementById("gct-count").innerText = `GCT: ${gctCount}`;
        
        // Atualiza o usuário no LocalStorage
        user.gct = gctCount;
        localStorage.setItem("users", JSON.stringify(users));

        this.remove();
    });

    document.getElementById("game-area").appendChild(token);

    setTimeout(() => {
        token.remove();
    }, 7000); // Remove a ficha após 7 segundos
}

setInterval(dropToken, 1000);
