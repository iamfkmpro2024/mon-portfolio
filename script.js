// On sélectionne le bouton et le corps de la page
const button = document.getElementById("toggle-mode");
const body = document.body;

// On écoute le "clic" sur le bouton
button.addEventListener("click", function() {
    
    // Bascule la classe "dark" sur le body (l'ajoute ou l'enlève)
    body.classList.toggle("dark");

    // Change le texte du bouton selon le mode
    if (body.classList.contains("dark")) {
        button.textContent = "☀️ Mode Clair";
        button.style.backgroundColor = "#fff";
        button.style.color = "#333";
    } else {
        button.textContent = "🌙 Mode Sombre";
        button.style.backgroundColor = "#333";
        button.style.color = "#fff";
    }
});