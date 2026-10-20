document.addEventListener("DOMContentLoaded", () => {
  fetch("/assets/components/menu.html")
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);
    })
    .catch(err => console.error("Erreur chargement menu :", err));
});
