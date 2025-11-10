document.addEventListener("DOMContentLoaded", function () {
  const path = window.location.pathname;
  const fileName = path.split("/").pop() || "index.html";

  const enlaces = document.querySelectorAll(".nav-links a, .menu a");

  enlaces.forEach(function (link) {
    const href = link.getAttribute("href");
    const linkName = href.split("/").pop() || "index.html";

    if (linkName.toLowerCase() === fileName.toLowerCase()) {
      link.classList.add("active-link");
    }
  });
});
