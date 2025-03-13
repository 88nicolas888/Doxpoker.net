let users = JSON.parse(localStorage.getItem("users")) || [];

// Ordena os jogadores por GCT e pega os 100 primeiros
users.sort((a, b) => b.gct - a.gct);
let top100 = users.slice(0, 100);

let rankingList = document.getElementById("ranking-list");

// Adiciona os jogadores na tabela
top100.forEach((user, index) => {
    let row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${user.username}</td>
        <td>${user.gct}</td>
    `;
    rankingList.appendChild(row);
});
