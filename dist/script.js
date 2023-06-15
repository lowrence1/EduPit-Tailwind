const headerNav = document.querySelectorAll(".drop__nav h4");
headerNav.forEach((hNav) => {
  hNav.addEventListener("mousemove", () => {
    hNav.nextElementSibling.classList.add("drop");
  });
  hNav.addEventListener("mouseout", () => {
    hNav.nextElementSibling.classList.remove("drop");
  });
});

const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__nav nav");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const dropNav = document.querySelectorAll(".drop__nav h4");
dropNav.forEach((dropN) => {
  dropN.addEventListener("click", () => {
    dropN.nextElementSibling.classList.toggle("open");
    dropN.querySelector(".drop__toggle").classList.toggle("open");
  });
});

const faqs = document.querySelectorAll(".header__item h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});




