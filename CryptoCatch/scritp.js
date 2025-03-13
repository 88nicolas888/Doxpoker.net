document.getElementById("show-register").addEventListener("click", function () {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
});

document.getElementById("show-login").addEventListener("click", function () {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
});

// Cadastro
document.getElementById("register-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("register-username").value;
    let password = document.getElementById("register-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.username === username)) {
        alert("Usuário já existe!");
        return;
    }

    users.push({ username, password, gct: 0 });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Cadastro realizado com sucesso!");
    location.reload();
});

// Login
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", username);
        window.location.href = "game.html"; 
    } else {
        alert("Usuário ou senha incorretos!");
    }
});