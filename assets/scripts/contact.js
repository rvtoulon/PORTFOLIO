// Envoi en AJAX : la redirection personnalisée de Formspree est payante
const form = document.getElementById("contact-form");
const errorMsg = document.getElementById("form-error");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorMsg.classList.add("hidden");
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });
    if (response.ok) {
      window.location.href = "merci.html";
    } else {
      errorMsg.classList.remove("hidden");
    }
  } catch {
    errorMsg.classList.remove("hidden");
  }
});
