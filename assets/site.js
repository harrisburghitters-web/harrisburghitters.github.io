function toggleMenu() {
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  nav.classList.toggle("open");
}
