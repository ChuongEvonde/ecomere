const header = document.querySelector(".header-top");
const up = document.querySelector(".up");
window.onscroll = () => {
  if (window.scrollY >= 50) {
    up.style.visibility = "visible";
    header.classList.add("active");
  } else {
    up.style.visibility = "hidden";
    header.classList.remove("active");
  }
};
up.addEventListener("click", () => {
  window.scrollTo({
    let: 0,
    top: 0,
    behavior: "smooth",
  });
});
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
// ---------render----------
const Menus = [
  {
    id: 1,
    img: "./image/Image (1).png",
    rate: "4.9",
    title: "alad, Greens",
    price: "$29.560",
  },
  {
    id: 1,
    img: "./image/Image (2).png",
    rate: "4.9",
    title: "Cheese Burger",
    price: "$23.030",
  },
  {
    id: 1,
    img: "./image/Image (3).png",
    rate: "4.9",
    title: "Chicken Biryani",
    price: "$21.330",
  },
  {
    id: 1,
    img: "./image/Image (4).png",
    rate: "4.9",
    title: "Sandwiches",
    price: "$25.000",
  },
  {
    id: 1,
    img: "./image/Image (5).png",
    rate: "4.9",
    title: "Spicy Pizzas",
    price: "$26.000",
  },
  {
    id: 1,
    img: "./image/Image (6).png",
    rate: "4.9",
    title: "alad, Greens",
    price: "$28.670",
  },
];
const menuList = document.querySelector(".menu-list");
window.addEventListener("DOMContentLoaded", renderMenu(Menus));

function renderMenu(Menus) {
  const menuItem = Menus.map((item) => {
    return `<li class="menu-item">
    <img src="${item.img}" alt="" class="menu-img" />
    <div class="menu-rate">
      <i class="bx bxs-star"></i>
      <span>${item.rate}</span>
    </div>
    <h4 class="menu-item-title">${item.title}</h4>
    <div class="menu-order">
      <a href="#" class="btn menu-btn">Order Now</a>
      <span class="price">${item.price}</span>
    </div>
  </li>`;
  });
  const item = menuItem.join("");
  menuList.innerHTML = item;
}
// ----------scroll-----
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
});
sr.reveal(`.heading, .title,.footer-title`);
sr.reveal(`.header-decs, .decripstion,.services-item, .menu-item`, {
  delay: 400,
});
sr.reveal(`.btn-order`, { delay: 500 });
sr.reveal(`.btn-exp, .btn-cri`, { delay: 500 });
sr.reveal(`.btn-play`, { delay: 600 });
sr.reveal(`.header-icon`, { delay: 700 });
sr.reveal(`.header-img`, { origin: "bottom" });
sr.reveal(`.header-group`, { origin: "rigth" });
sr.reveal(`.countdown-list, .services-list`, { interval: 100 });
sr.reveal(`.about-img,.footer-copyright `, { origin: "left", interval: 100 });
sr.reveal(`.about-data, .footer-social`, { origin: "rigth" });
sr.reveal(`.btn-sub`, { origin: "rigth" });
sr.reveal(`.footer-data`, { origin: "bottom", delay: 400, interval: 100 });
