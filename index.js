// ============================
// AUTHENTIFICATION SIMULÉE
// ============================
const MOCK_USER = {
  username: "client123",
  password: "AZERTY12"
};

function authenticate(user, pass) {
  return user === MOCK_USER.username && pass === MOCK_USER.password;
}

// ============================
// ELEMENTS
// ============================
const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const btnLogin = document.querySelector(".btn-login");

const keyboard = document.getElementById("keyboard");
const toggleKeyboard = document.getElementById("toggleKeyboard");

// ============================
// VALIDATION UI
// ============================
function showError(input) {
  input.parentElement.classList.add("invalid");
  input.parentElement.classList.remove("valid");
}

function showValid(input) {
  input.parentElement.classList.add("valid");
  input.parentElement.classList.remove("invalid");
}

usernameInput.addEventListener("input", () => {
  usernameInput.value.length >= 3
    ? showValid(usernameInput)
    : showError(usernameInput);
});

passwordInput.addEventListener("input", () => {
  passwordInput.value.length >= 6
    ? showValid(passwordInput)
    : showError(passwordInput);
});

// ============================
// CLAVIER VIRTUEL
// ============================
let keys = "1234567890AZERTYUIOPQSDFGHJKLMWXCVBN".split("");

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function renderKeyboard() {
  keyboard.innerHTML = "";

  shuffle(keys).forEach(key => {
    const btn = document.createElement("button");
    btn.type = "button"; // TRÈS IMPORTANT
    btn.textContent = key;

    btn.addEventListener("click", () => {
      passwordInput.value += key;

      // 🔥 relance la validation
      passwordInput.dispatchEvent(new Event("input"));
    });

    keyboard.appendChild(btn);
  });

  // Touche supprimer
  const del = document.createElement("button");
  del.type = "button";
  del.textContent = "⌫";

  del.addEventListener("click", () => {
    passwordInput.value = passwordInput.value.slice(0, -1);
    passwordInput.dispatchEvent(new Event("input"));
  });

  keyboard.appendChild(del);
}


toggleKeyboard.addEventListener("click", () => {
  keyboard.classList.toggle("hidden");
  renderKeyboard();
});

// ============================
// SOUMISSION
// ============================

loginForm.addEventListener("submit", e => {
  e.preventDefault();

  if (!authenticate(usernameInput.value, passwordInput.value)) {
    alert("Identifiant ou mot de passe incorrect");
    return;
  }

  btnLogin.textContent = "Connexion en cours...";
  btnLogin.disabled = true;

  setTimeout(() => {
    window.location.href = "inter.html";
  }, 1500);
});
// FERMETURE DU CLAVIER AU CLIC EXTÉRIEUR
document.addEventListener("click", (e) => {
  // Vérifie si le clavier est visible
  if (!keyboard.classList.contains("hidden")) {
    // Si le clic est en dehors du clavier ET du bouton toggle
    if (!keyboard.contains(e.target) && e.target !== toggleKeyboard) {
      keyboard.classList.add("hidden");
    }
  }
});

  
