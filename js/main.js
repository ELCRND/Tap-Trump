const menuBtn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__menu");
const faqBtns = document.querySelectorAll(".question__btn");

// открыть/закрыть меню
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("visible");
  menuBtn.classList.toggle("close");
  document.body.classList.toggle("scroll-off");
});

// закрытие меню при нажатии на ссылку
document.querySelectorAll(".menu__link").forEach((link) =>
  link.addEventListener("click", () => {
    menu.classList.remove("visible");
    menuBtn.classList.remove("close");
    document.body.classList.remove("scroll-off");
  })
);

faqBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    e.target.parentNode.classList.toggle("open");
    e.target.classList.toggle("open");
  })
);
