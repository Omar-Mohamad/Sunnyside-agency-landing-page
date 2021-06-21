const nav = document.querySelector("nav"),
  linksContainer = document.querySelector(".nav-links"),
  burger = document.querySelector(".burger");

window.addEventListener("scroll", function () {
  if (this.scrollY > 150) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

burger.addEventListener("click", function () {
  nav.classList.toggle("open");
  this.classList.toggle("toggle");
});
