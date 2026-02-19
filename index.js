document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "Weemans045" && password === "Camille03@") {
    const button = document.querySelector(".btn-login");
    button.textContent = "Connexion...";
    button.disabled = true;

    setTimeout(() => {
      window.location.href = "inter.html";
    }, 1800);
  } else {
    alert("Identifiants incorrects.");
  }
});
  
