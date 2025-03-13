const rankingList = document.getElementById('rankingList');

function loadRanking() {
    let ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    
    ranking.sort((a, b) => b.score - a.score);  // Ordena do maior para o menor GCT
    
    ranking.slice(0, 100).forEach((player, index) => {
        const li = document.createElement('li');
        li.innerText = `${index + 1}. ${player.username} - ${player.score} GCT`;
        rankingList.appendChild(li);
    });
}

loadRanking();