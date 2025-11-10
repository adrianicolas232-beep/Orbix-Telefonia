document.getElementById("go-plans").addEventListener("click", function () {
  let ruta;
  if (window.location.pathname.includes("index.html")) {
    ruta = "pages/contratar.html";
  } else {
    ruta = "../pages/contratar.html";
  }
  window.location.href = ruta;
});
