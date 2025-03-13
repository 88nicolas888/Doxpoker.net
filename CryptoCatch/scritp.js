document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        localStorage.setItem('username', username);
        window.location.href = 'game.html';  // Redireciona para a página do jogo
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
