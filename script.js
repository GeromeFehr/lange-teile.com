document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  const legalTabs = document.querySelectorAll(".legal-tab");
  const legalPanels = document.querySelectorAll(".legal-panel");

  if (legalTabs.length && legalPanels.length) {
    legalTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-legal-target");

        legalTabs.forEach((btn) => btn.classList.remove("active"));
        legalPanels.forEach((panel) => panel.classList.remove("active"));

        tab.classList.add("active");

        const activePanel = document.getElementById(target);
        if (activePanel) {
          activePanel.classList.add("active");
        }
      });
    });
  }

  const contactForm = document.querySelector('[data-demo-contact-form]');
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Demo-Formular gesendet. Für echten Betrieb brauchst du Backend oder Form-Dienst.");
    });
  }

  const buyButtons = document.querySelectorAll("[data-add-to-cart]");
  const cartCount = document.querySelector("[data-cart-count]");

  let count = 0;

  if (buyButtons.length && cartCount) {
    buyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        count += 1;
        cartCount.textContent = count;
      });
    });
  }
});
