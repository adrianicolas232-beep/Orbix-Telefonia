document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".menu-toggle");
  const menuLinks = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-button");

  // Abrir
  hamburger.addEventListener("click", function () {
    menuLinks.classList.toggle("active");
  });

  // Cerrar
  closeBtn.addEventListener("click", function () {
    menuLinks.classList.remove("active");
  });
});
