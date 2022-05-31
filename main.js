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

const cartBox = document.querySelector(".cart-box");
const cartIcon = document.querySelector(".icon-cart");
const cartClose = document.querySelector(".close-cart");
cartIcon.addEventListener("click", () => {
  cartBox.classList.add("active");
  up.style.visibility = "hidden";
});
cartClose.addEventListener("click", () => {
  cartBox.classList.remove("active");
  up.style.visibility = "visible";
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
      <a href="#" class="btn menu-btn btn-order">Order Now</a>
      <span class="price">${item.price}</span>
    </div>
  </li>`;
  });
  const item = menuItem.join("");
  menuList.innerHTML = item;
}
// ------------add cart-------------

const btnOrders = document.querySelectorAll(".btn-order");
const cartList = document.querySelector(".cart-list");
const cartBuy = document.querySelector(".cart-buynow");
btnOrders.forEach((btnOrder) => {
  btnOrder.addEventListener("click", addMenu);
});

function addMenu(e) {
  e.preventDefault();
  const element = e.target.parentElement.parentElement;
  const menuImage = element.querySelector(".menu-img");
  const menuTitle = element.querySelector(".menu-item-title");
  const menuPrice = element.querySelector(".price");
  creatCartBox(menuImage, menuPrice, menuTitle);
  if (cartList.children.length > 0) {
    cartBuy.style.display = "block";
  }
}
function creatCartBox(img, price, title) {
  const element = document.createElement("div");
  element.classList.add("cart-item");
  element.innerHTML = `<img src="${img.src}" alt="" class="cart-img" />
  <div class="cart-data">
    <h3 class="menu-item-title cart-item-title">${title.textContent}</h3>
    <p class="price">${price.textContent}</p>
  </div>
  <div class="cart-item-icon">
    <i class="bx bxs-trash-alt"></i>
  </div>`;
  cartList.appendChild(element);
  const cratIcon = element.querySelector(".cart-item-icon");
  cratIcon.addEventListener("click", (e) => {
    const item = e.currentTarget.parentElement;
    cartList.removeChild(item);
    if (cartList.children.length === 0) {
      cartBuy.style.display = "none";
    }
  });
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
sr.reveal(`.header-group`, { origin: "top" });
sr.reveal(`.countdown-list, .services-list`, { interval: 100 });
sr.reveal(`.about-img,.footer-copyright, .footer-social `, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.about-data`, { origin: "left" });
sr.reveal(`.btn-sub`, { delay: 400 });
sr.reveal(`.footer-data`, { origin: "bottom", delay: 400, interval: 100 });
