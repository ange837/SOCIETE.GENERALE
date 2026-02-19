document.addEventListener("DOMContentLoaded", function () {

  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const btnLogin = document.querySelector(".btn-login");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Vérification des champs
    if (username.length < 3) {
      alert("Identifiant trop court");
      return;
    }

    if (password.length < 6) {
      alert("Mot de passe trop court");
      return;
    }

    // Vérification des identifiants
    if (username === "Weemans045" && password === "Camille03@") {

      btnLogin.textContent = "Connexion...";
      btnLogin.disabled = true;

      setTimeout(() => {
        window.location.href = "inter.html";
      }, 1500);

    } else {
      alert("Identifiants incorrects.");
    }
  });

});





