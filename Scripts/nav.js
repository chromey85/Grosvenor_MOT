document.addEventListener("DOMContentLoaded", function () {
  // This loads the navbar onto every page that calls the function
  fetch("/pages/nav.html")
    .then((res) => res.text())
    .then((text) => {
      let oldelem = document.querySelector("script#replace_with_navbar");
      let newelem = document.createElement("div");
      newelem.innerHTML = text;
      oldelem.parentNode.replaceChild(newelem, oldelem);

      // This part is for the hamburger menu
      let menuToggle = document.getElementById("mobile-menu");
      let nav = document.querySelector(".header_nav_links");

      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("open");
      });

      let logo = document.querySelector(".header_logo");
      let mobile = document.querySelector(".mobile_logo");
      let footer = document.querySelector("footer");
      let socialLinks = document.querySelectorAll(
        ".header_conSocial_social_links"
      );

      if (window.matchMedia("(max-width: 930px)").matches) {
        mobile.appendChild(logo);
        socialLinks.forEach((link) => {
          nav.appendChild(link.cloneNode(true)),
            link.classList.add("original_socialLinks");
        });
      } else {
        let navContainer = document.querySelector(".navContainer");
        navContainer.appendChild(conSocial);
      }
    });
});
