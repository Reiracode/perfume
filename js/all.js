$(document).ready(function () {


// navbar
  const navBar = document.querySelector(".menu");
  const dropNav = document.querySelector("ul.navlink");
  navBar.addEventListener("click", function () {
    navBar.classList.toggle("active");
    dropNav.classList.toggle("active");
  });

});
