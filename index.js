document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    // Simulation : identifiants "admin" / "1234"
    if (username === "Weemans045" && password === "Camille03@") {
      window.location.href = "inter.html";
    } else {
      alert("Identifiants incorrects.");
    }
  });
  document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const button = document.querySelector(".btn-login");
  button.textContent = "Connexion...";
  button.disabled = true;

  setTimeout(() => {
    window.location.href = "index.html"; // ou dashboard, page comptes etc.
  }, 1800);
});

  