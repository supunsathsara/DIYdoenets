const menu = document.getElementById("menu-toggle");
const navCollapse = document.getElementById("nav-collapse");

menu.addEventListener("click", function () {
  //console.log("clicked");
  navCollapse.classList.contains("show")
    ? navCollapse.classList.remove("show")
    : navCollapse.classList.add("show");
  //navCollapse.classList.add("show");
});
