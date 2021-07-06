// {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>   */}
$(document).ready(function() {
  AOS.init();
// navbar
  const navBar = document.querySelector(".menu");
  const dropNav = document.querySelector("ul.navlink");
  navBar.addEventListener("click", function() {
    dropNav.classList.toggle("active");
  });




  // $(window).load(function() {
  //   $("#product_content").addClass("loading");
  // });

});
