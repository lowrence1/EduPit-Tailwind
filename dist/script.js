const toggleMenu = document.querySelector(".toggle__menu");
const headerBot = document.querySelector(".header__actions");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerBot.classList.toggle("open");
});

const faqs = document.querySelectorAll(".header__item h4");
faqs.forEach((drop) => {
  drop.addEventListener("click", () => {
    drop.nextElementSibling.classList.toggle("open");
    drop.querySelector("i").classList.toggle("open");
  });
});
