const navbar = document.querySelector(".navbar");
const nav = navbar.querySelector(".nav-links");
const links = nav.querySelectorAll(".nav-link__item a");
const burger = document.querySelector(".burger");
const arrow = document.querySelector(".arrow");
const searchField = document.querySelector(".form");
const banner = document.querySelector(".banner");

/*********** NAVIGATION BAR ************/

arrow.addEventListener("click", () => {
  searchField.classList.toggle("toggle-form");
  arrow.classList.toggle("rotate-arrow");
});

// Nav toggling on burger click
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

// Collapse nav on link click
links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// Collapse nav on escape press
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (nav.classList.contains("nav-open")) {
      nav.classList.remove("nav-open");
      burger.classList.remove("toggle");
    }
  }
});

/***************** HERO SECTION ****************/

const sliderImages = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
];

let counter = 0;
const changeImage = () => {
  banner.style.transition = "4s ease-in";
  banner.style.backgroundImage = `url(${sliderImages[counter]})`;
  counter++;

  if (counter === sliderImages.length) counter = 0;
};

setInterval(changeImage, 5000);