document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const button = document.querySelector(".btn-login");

  if (username === "Weemans045" && password === "Camille03@") {
    button.textContent = "Connexion...";
    button.disabled = true;

    setTimeout(() => {
      window.location.href = "inter.html"; // ✅ bonne page
    }, 1800);
  } else {
    alert("Identifiants incorrects.");
  }
});
  

