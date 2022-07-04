const burger = document.querySelector(".burger__menu");
const headerNav = document.querySelector(".header__nav");
const headerNavList = document.querySelector(".header__nav-list");

const body = document.querySelector("body");

burger.addEventListener("click", () => {
  headerNavList.classList.toggle("active");
  burger.classList.toggle("active");
  headerNav.classList.toggle("active");
  body.classList.toggle("active");
});
