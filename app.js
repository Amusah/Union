const navbar = document.querySelector(".navbar");
const nav = navbar.querySelector(".nav-links");
const links = nav.querySelectorAll(".nav-link__item a");
const burger = document.querySelector(".burger");
const navArrow = document.querySelector(".arrow");
const searchField = document.querySelector(".form");
const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner-btn");
const year = document.querySelector(".copyright .year");
const dropDownLink = document.querySelectorAll(".dropdown-link");
const dropdownMenu1 = document.querySelector(".menu-1");
const dropdownMenu2 = document.querySelector(".menu-2");
const dropdownMenu3 = document.querySelector(".menu-3");
const dropDownArrow1 = document.querySelector(".solid-icon-1");
const dropDownArrow2 = document.querySelector(".solid-icon-2");
const dropDownArrow3 = document.querySelector(".solid-icon-3");

/*********** NAVIGATION BAR ************/

navArrow.addEventListener("click", () => {
  searchField.classList.toggle("toggle-form");
  navArrow.classList.toggle("rotate-arrow");
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

dropDownLink.forEach((link) =>
  link.addEventListener("click", (e) => {
    if(e.target.classList.contains('solid-icon-1') || e.target.classList.contains('link-1')){
      dropdownMenu1.classList.toggle('show');
      dropDownArrow1.classList.toggle("rotate-arrow");
    }

    if(e.target.classList.contains('solid-icon-2') || e.target.classList.contains('link-2')){
      dropdownMenu2.classList.toggle("show");
      dropDownArrow2.classList.toggle("rotate-arrow");
    }

    if(e.target.classList.contains('solid-icon-3') || e.target.classList.contains('link-3')){
      dropdownMenu3.classList.toggle("show");
      dropDownArrow3.classList.toggle("rotate-arrow");
    }
  })
);

/***************** HERO SECTION ****************/

const sliderImages = [
  "images/slide1.jpg",
  "images/slide2.jpg",
  "images/slide3.jpg",
  "images/slide4.jpg",
];

let counter = 0;
const changeImage = () => {
  banner.style.transition = "2s ease-in";
  banner.style.backgroundImage = `url(${sliderImages[counter]})`;
  counter++;

  if (counter === sliderImages.length) counter = 0;
};

setInterval(changeImage, 7000);

// bannerBtn.addEventListener("click", ({ target }) => {
//   // console.log('clicked')
//   if (
//     target.classList.contains("btn__next") ||
//     target.classList.contains("right-arrow")
//   ) {
//     console.log("next");
//     if (counter === sliderImages.length - 1) {
//       counter = 0;
//     } else {
//       counter++;
//     }
//     changeImage();
//   }

//   if (
//     target.classList.contains("btn__prev") ||
//     target.classList.contains("left-arrow")
//   ) {
//     if (counter === 0) {
//       counter = sliderImages.length - 1;
//     } else {
//       counter--;
//     }
//     changeImage();
//   }
// });

/***************Footer Date***************/
year.textContent = new Date().getFullYear();
