const header = document.querySelector("header");
const navbarLinks = document.querySelectorAll("nav a");

function chnageBg() {
  if (document.documentElement.scrollTop >= 120) {
    header.classList.add("active");
    navbarLinks.forEach((el) => {
      el.style.color = "rgb(0, 0, 0)";
    });
    document.getElementById("logo").src = "img/logo-blue.png";
  } else {
    header.classList.remove("active");
    document.getElementById("logo").src = "img/logo-white.png";
    navbarLinks.forEach((el) => {
      el.style.color = "rgb(255, 255, 255)";
    });
  }
}

window.addEventListener("scroll", chnageBg);

// Gestionnaire d'événements pour le bouton principal
const mainButton = document.getElementById("mainButton");
const secondaryButtons = document.getElementById("secondaryButtons");

mainButton.addEventListener("click", () => {
  if (secondaryButtons.style.display === "flex") {
    secondaryButtons.style.display = "none";
  } else {
    secondaryButtons.style.display = "flex";
  }
});

// form Professionnels validation

document
  .getElementById("ProfessionnelFormBtn")
  .addEventListener("click", () => {
    document
      .getElementById("ProfessionnelForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        // Inputs
        const ProfessionnelFullname = document
          .getElementById("ProfessionnelFullname")
          .value.trim();
        const ProfessionnelEmail = document
          .getElementById("ProfessionnelEmail")
          .value.trim();
        const ProfessionnelPhone = document
          .getElementById("ProfessionnelPhone")
          .value.trim();
        const ProfessionnelEtablissement = document
          .getElementById("ProfessionnelEtablissement")
          .value.trim();
        const ProfessionnelCity = document
          .getElementById("ProfessionnelCity")
          .value.trim();

        // Errors
        const ProfessionnelFullnameError = document.getElementById(
          "ProfessionnelFullnameError"
        );
        const ProfessionnelEmailError = document.getElementById(
          "ProfessionnelEmailError"
        );
        const ProfessionnelPhoneError = document.getElementById(
          "ProfessionnelPhoneError"
        );
        const ProfessionnelEtablissementError = document.getElementById(
          "ProfessionnelEtablissementError"
        );
        const ProfessionnelCityError = document.getElementById(
          "ProfessionnelCityError"
        );

        // Reset errors
        ProfessionnelFullnameError.textContent = "";
        ProfessionnelEmailError.textContent = "";
        ProfessionnelPhoneError.textContent = "";
        ProfessionnelEtablissementError.textContent = "";
        ProfessionnelCityError.textContent = "";

        let isValid = true;

        // Validation
        if (ProfessionnelFullname === "") {
          ProfessionnelFullnameError.textContent = "Le nom complet est requis.";
          isValid = false;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (ProfessionnelEmail === "") {
          ProfessionnelEmailError.textContent = "L’email est requis.";
          isValid = false;
        } else if (!emailPattern.test(ProfessionnelEmail)) {
          ProfessionnelEmailError.textContent = "Format d’email invalide.";
          isValid = false;
        }

        const phonePattern = /^[0-9]{9,15}$/;
        if (ProfessionnelPhone === "") {
          ProfessionnelPhoneError.textContent = "Le numéro est requis.";
          isValid = false;
        } else if (!phonePattern.test(ProfessionnelPhone)) {
          ProfessionnelPhoneError.textContent = "Numéro invalide.";
          isValid = false;
        }

        if (ProfessionnelEtablissement === "") {
          ProfessionnelEtablissementError.textContent =
            "Le nom de l’établissement est requis.";
          isValid = false;
        }

        if (ProfessionnelCity === "") {
          ProfessionnelCityError.textContent = "La ville est requise.";
          isValid = false;
        }

        // Success
        if (isValid) {
          console.log("✅ Données valides :");
          console.log("Nom:", ProfessionnelFullname);
          console.log("Email:", ProfessionnelEmail);
          console.log("Téléphone:", ProfessionnelPhone);
          console.log("Établissement:", ProfessionnelEtablissement);
          console.log("Ville:", ProfessionnelCity);
          alert("Formulaire envoyé avec succès !");
          // this.reset();
        }
      });
  });

// form client validation
document.getElementById("clientFormBtn").addEventListener("click", () => {
  document
    .getElementById("clientForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      // Inputs
      const clientFullname = document
        .getElementById("clientFullname")
        .value.trim();
      const clientEmail = document.getElementById("clientEmail").value.trim();
      const clientPhone = document.getElementById("clientPhone").value.trim();
      const clientCity = document.getElementById("clientCity").value.trim();

      // Error Elements
      const clientFullnameError = document.getElementById(
        "clientFullnameError"
      );
      const clientEmailError = document.getElementById("clientEmailError");
      const clientPhoneError = document.getElementById("clientPhoneError");
      const clientCityError = document.getElementById("clientCityError");

      // Reset errors
      clientFullnameError.textContent = "";
      clientEmailError.textContent = "";
      clientPhoneError.textContent = "";
      clientCityError.textContent = "";

      let clientIsValid = true;

      // Validation
      if (clientFullname === "") {
        clientFullnameError.textContent = "Le nom complet est requis.";
        clientIsValid = false;
      }

      const clientEmailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (clientEmail === "") {
        clientEmailError.textContent = "L’email est requis.";
        clientIsValid = false;
      } else if (!clientEmailPattern.test(clientEmail)) {
        clientEmailError.textContent = "Format d’email invalide.";
        clientIsValid = false;
      }

      const clientPhonePattern = /^[0-9]{9,15}$/;
      if (clientPhone === "") {
        clientPhoneError.textContent = "Le numéro est requis.";
        clientIsValid = false;
      } else if (!clientPhonePattern.test(clientPhone)) {
        clientPhoneError.textContent = "Numéro invalide.";
        clientIsValid = false;
      }

      if (clientCity === "") {
        clientCityError.textContent = "La ville est requise.";
        clientIsValid = false;
      }

      // If valid
      if (clientIsValid) {
        console.log("✅ Données valides :");
        console.log("Nom:", clientFullname);
        console.log("Email:", clientEmail);
        console.log("Téléphone:", clientPhone);
        console.log("Ville:", clientCity);
        alert("Formulaire envoyé avec succès !");
        // this.reset(); // Optionnel
      }
    });
});
