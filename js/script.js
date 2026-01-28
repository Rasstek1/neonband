
    // Set year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Close mobile nav when clicking a link
    document.querySelectorAll(".navbar .nav-link").forEach(a => {
      a.addEventListener("click", () => {
        const nav = document.getElementById("navMain");
        if (nav.classList.contains("show")) {
          const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
          bsCollapse.hide();
        }
      });
    });

    //submit
// Neon fake submit (frontend only)
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple validation (HTML required already helps)
  const name = contactForm.querySelector('[name="name"]').value.trim();
  const email = contactForm.querySelector('[name="email"]').value.trim();
  const subject = contactForm.querySelector('[name="subject"]').value.trim();
  const message = contactForm.querySelector('[name="message"]').value.trim();

  formMsg.classList.remove("neo-msg--ok", "neo-msg--err");

  if (!name || !email || !subject || !message) {
    formMsg.classList.add("neo-msg--err");
    formMsg.textContent = "Oups — remplis tous les champs avant d’envoyer.";
    return;
  }

  // Demo “sending” state
  sendBtn.disabled = true;
  sendBtn.querySelector("span:last-child").textContent = "Envoi…";
  formMsg.textContent = "";

  setTimeout(() => {
    formMsg.classList.add("neo-msg--ok");
    formMsg.textContent = "Message envoyé (démo). Quand tu seras prêt, on branche Formspree / Netlify / backend.";

    contactForm.reset();
    sendBtn.disabled = false;
    sendBtn.querySelector("span:last-child").textContent = "Envoyer";
  }, 650);
});


