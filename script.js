// "use strict";

// const homeLink = document.querySelector(".link-home");
// const portfolioLink = document.querySelector(".link-portfolio");
// const contactLink = document.querySelector(".link-contact");
const overlay = document.querySelector(".overlay");

// homeLink.addEventListener("click", function () {
// overlay.classList.remove('hidden')
//   document.body.innerHTML = `${/Home/home.html}`;
// });

const displayNav = document.querySelector(".display-nav");
const ul = document.querySelector("ul");
const closeNavIcon = document.querySelector("svg");

const openNav = function () {
  ul.style.left = "50%";
  overlay.classList.remove("hidden");
};
displayNav.addEventListener("click", openNav);

const closeNav = function () {
  overlay.classList.add("hidden");
  ul.style.left = "100%";
};

overlay.addEventListener("click", closeNav);
closeNavIcon.addEventListener("click", closeNav);
