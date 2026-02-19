const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btnLogin = document.querySelector(".btn-login");

function showError(input, message) {
  input.parentElement.classList.add("invalid");
  input.parentElement.classList.remove("valid");
  if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("error-msg")) {
    const error = document.createElement("small");
    error.classList.add("error-msg");
    error.style.color = "#ff4d4f";
    error.style.fontSize = "12px";
    error.textContent = message;
    input.parentElement.appendChild(error);
  } else {
    input.nextElementSibling.textContent = message;
  }
}

function showValid(input) {
  input.parentElement.classList.add("valid");
  input.parentElement.classList.remove("invalid");
  if (input.nextElementSibling && input.nextElementSibling.classList.contains("error-msg")) {
    input.nextElementSibling.textContent = "";
  }
}

usernameInput.addEventListener("input", () => {
  if (usernameInput.value.trim().length < 3) {
    showError(usernameInput, "Identifiant trop court");
  } else {
    showValid(usernameInput);
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.trim().length < 6) {
    showError(passwordInput, "Mot de passe trop court");
  } else {
    showValid(passwordInput);
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  let valid = true;

  if (username.length < 3) {
    showError(usernameInput, "Identifiant trop court");
    valid = false;
  }
  if (password.length < 6) {
    showError(passwordInput, "Mot de passe trop court");
    valid = false;
  }

  if (!valid) return;

  // ✅ Vérification des identifiants
  if (username !== "Weemans045" || password !== "Camille03@") {
    showError(usernameInput, "Identifiants incorrects");
    showError(passwordInput, "Identifiants incorrects");
    return; // ⛔ Stop, pas de redirection
  }

  // ✅ Identifiants corrects → animation + redirection
  btnLogin.textContent = "Connexion...";
  btnLogin.disabled = true;

  setTimeout(() => {
    window.location.href = "inter.html";
  }, 1800);
});
