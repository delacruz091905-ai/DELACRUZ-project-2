const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("open");
    mainNav.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.classList.remove("open");
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const subject = String(formData.get("subject"));
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      String(formData.get("message"))
    ].join("\n");
    window.location.href = `mailto:kcc_1927@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
