document.addEventListener("DOMContentLoaded", function () {
  fetch("/pages/nav.html")
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector("script#replace_with_navbar");
      let newelem = document.createElement("div");
      newelem.innerHTML = text;
      oldelem.parentNode.replaceChild(newelem, oldelem);

      var menuToggle = document.getElementById("mobile-menu");
      var nav = document.querySelector(".header_nav_links");

      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
      });
      var conSocial = document.querySelector(".header_logo");
      var header = document.querySelector(".header");

      if (window.matchMedia("(max-width: 930px)").matches) {
        header.appendChild(conSocial);
      } else {
        var navContainer = document.querySelector(".navContainer");
        navContainer.appendChild(conSocial);
      }
    });
});
