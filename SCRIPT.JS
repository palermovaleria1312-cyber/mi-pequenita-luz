// Año en footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menú móvil
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.hidden = true;
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Form -> abre WhatsApp con mensaje listo
const form = document.getElementById("leadForm");
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const nombre = (data.get("nombre") || "").toString().trim();
  const telefono = (data.get("telefono") || "").toString().trim();
  const correo = (data.get("correo") || "").toString().trim();
  const grado = (data.get("grado") || "").toString().trim();

  const msg =
`Hola, Colegio Mi Pequeñita Luz 👋
Quisiera información de Admisión 2026.

Nombre: ${nombre}
Teléfono: ${telefono}
Correo: ${correo}
Grado a postular: ${grado}

Gracias.`;

  const url = `https://wa.me/51993558729?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank", "noopener,noreferrer");
  form.reset();
});
