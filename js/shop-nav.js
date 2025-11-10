document.addEventListener("DOMContentLoaded", function () {
  // Botones
  const btnDevices = document.getElementById("btn-devices");
  const btnOffer = document.getElementById("btn-offer");
  const btnFeatured = document.getElementById("btn-featured");

  // Secciones
  const sectionDevices = document.getElementById("devices");
  const sectionOffer = document.getElementById("offer");
  const sectionFeatured = document.getElementById("featured");

  // Función para mostrar una sola sección
  function showSection(sectionToShow) {
    sectionDevices.style.display = "none";
    sectionOffer.style.display = "none";
    sectionFeatured.style.display = "none";
    sectionToShow.style.display = "flex";
  }

  // Eventos de los botones
  btnDevices.addEventListener("click", function () {
    showSection(sectionDevices);
  });
  btnOffer.addEventListener("click", function () {
    showSection(sectionOffer);
  });
  btnFeatured.addEventListener("click", function () {
    showSection(sectionFeatured);
  });

  // Mostrar por defecto la sección "Dispositivos"
  showSection(sectionDevices);
});
