// ---------------------------------------------------------------------
// Set current year in footer
// ---------------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();


// ---------------------------------------------------------------------
// Close mobile navigation when clicking a nav link
// ---------------------------------------------------------------------
document.querySelectorAll(".navbar .nav-link").forEach(link => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("navMain");

    // Only close if the navbar is currently expanded
    if (nav.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(nav);
      bsCollapse.hide();
    }
  });
});


// ---------------------------------------------------------------------
// CONTACT FORM — Frontend-only neon fake submit
// ---------------------------------------------------------------------
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
const sendBtn = document.getElementById("sendBtn");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Basic validation (HTML required attributes already help)
  const name = contactForm.querySelector('[name="name"]').value.trim();
  const email = contactForm.querySelector('[name="email"]').value.trim();
  const subject = contactForm.querySelector('[name="subject"]').value.trim();
  const message = contactForm.querySelector('[name="message"]').value.trim();

  // Reset message state
  formMsg.classList.remove("neo-msg--ok", "neo-msg--err");

  // Validation error
  if (!name || !email || !subject || !message) {
    formMsg.classList.add("neo-msg--err");
    formMsg.textContent = "Oops — please fill in all fields before sending.";
    return;
  }

  // Simulated “sending” state
  sendBtn.disabled = true;
  sendBtn.querySelector("span:last-child").textContent = "Sending…";
  formMsg.textContent = "";

  setTimeout(() => {
    // Success message (demo only)
    formMsg.classList.add("neo-msg--ok");
    formMsg.textContent =
      "Message sent (demo). When ready, plug in Formspree / Netlify / a backend.";

    contactForm.reset();
    sendBtn.disabled = false;
    sendBtn.querySelector("span:last-child").textContent = "Send";
  }, 650);
});


// ---------------------------------------------------------------------
// Bootstrap mobile nav safety close (DOMContentLoaded)
// ---------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const navMain = document.getElementById("navMain");
  if (!navMain) return;

  // Bootstrap must exist for Collapse to work
  if (!window.bootstrap?.Collapse) return;

  const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMain, {
    toggle: false
  });

  // Close navbar when clicking a link (mobile only)
  navMain.querySelectorAll("a.nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const togglerVisible =
        window.getComputedStyle(document.querySelector(".navbar-toggler")).display !== "none";

      if (togglerVisible) {
        bsCollapse.hide();
      }
    });
  });
});
