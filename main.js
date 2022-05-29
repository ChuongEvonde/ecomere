const header = document.querySelector(".header-top");

window.onscroll = () => {
  if (window.scrollY > 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

// ------showmenu---------
const btnMenu = document.querySelector(".icon-menu");
const btnClose = document.querySelector(".icon-close");
const menu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-link");
btnMenu.addEventListener("click", () => {
  menu.classList.add("active");
});
btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
