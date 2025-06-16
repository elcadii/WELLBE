document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // Reset error messages
  ["fullName", "email", "subject", "message"].forEach((field) => {
    const el = document.getElementById("error-" + field);
    if (el) el.textContent = "";
  });

  let isValid = true;

  if (!data.fullName.trim()) {
    document.getElementById("error-fullName").textContent =
      "Le nom complet est requis.";
    isValid = false;
  }

  if (!data.email.trim()) {
    document.getElementById("error-email").textContent = "L'email est requis.";
    isValid = false;
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      document.getElementById("error-email").textContent =
        "Adresse email invalide.";
      isValid = false;
    }
  }

  if (!data.subject.trim()) {
    document.getElementById("error-subject").textContent =
      "Le sujet est requis.";
    isValid = false;
  }

  if (!data.message.trim()) {
    document.getElementById("error-message").textContent =
      "Le message est requis.";
    isValid = false;
  }

  if (!isValid) return;

  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  button.textContent = "Envoi en cours...";
  button.disabled = true;

  setTimeout(() => {
    const successMessage = document.getElementById("successMessage");
    successMessage.classList.remove("translate-x-full");

    form.reset();
    button.textContent = originalText;
    button.disabled = false;

    setTimeout(() => {
      successMessage.classList.add("translate-x-full");
    }, 3000);
  }, 1500);
});
