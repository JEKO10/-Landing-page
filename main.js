const toggle = document.querySelector("#toggle");
const menuMobile = document.querySelector(".menuMobile");

toggle.addEventListener("click", () => {
  menuMobile.classList.toggle("show");
  toggle.classList.toggle("show");
});
