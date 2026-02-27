/* ===== ativação no menu da página atual ===== */
const links = document.querySelectorAll(".nav-link");
const paginaAtual = window.location.pathname.split("/").pop();

links.forEach(link => {
  if (link.getAttribute("href") === paginaAtual) {
    link.classList.add("active");
  }
});

/* ===== ativa dark e light mode ===== */
const botaoTema = document.getElementById("themeToggle");
const body = document.body;

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  body.classList.add("dark-mode");
  if (botaoTema) botaoTema.textContent = "☀️";
}

if (botaoTema) {
  botaoTema.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("tema", "dark");
      botaoTema.textContent = "☀️";
    } else {
      localStorage.setItem("tema", "light");
      botaoTema.textContent = "🌙";
    }
  });
}