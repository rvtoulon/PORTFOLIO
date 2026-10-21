// Racine du site déduite de l'URL de ce script (<racine>/assets/scripts/menu.js) :
// fonctionne à l'identique en local (tout port / sous-dossier) et sur GitHub Pages (/PORTFOLIO/).
const siteRoot = new URL("../../", document.currentScript.src);

document.addEventListener("DOMContentLoaded", () => {
  fetch(new URL("assets/components/menu.html", siteRoot))
    .then(response => response.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterbegin", html);

      document.querySelectorAll("header nav a[data-link]").forEach(a => {
        a.href = new URL(a.getAttribute("data-link"), siteRoot).href;
      });
    })
    .catch(err => console.error("Erreur chargement menu :", err));
});
