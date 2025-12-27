// Minimal JS to keep page lightweight
console.log("Portfolio loaded successfully");
// Dark mode toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});

// Scroll reveal animation
const sections = document.querySelectorAll(".section");

const revealOnScroll = () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (top < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
