document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        // Simples: salva o usuário e redireciona
        localStorage.setItem('username', username);
        window.location.href = 'game.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
