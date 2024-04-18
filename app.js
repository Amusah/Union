const navbar = document.querySelector(".navbar");
const nav = navbar.querySelector(".nav-links");
const links = nav.querySelectorAll(".nav-link__item a");
const burger = document.querySelector(".burger");
const arrow = document.querySelector(".arrow");
const searchField = document.querySelector(".form");
const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner-btn");

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
  banner.style.transition = "2s ease-in";
  banner.style.backgroundImage = `url(${sliderImages[counter]})`;
  counter++;

  if (counter === sliderImages.length) counter = 0;
};

setInterval(changeImage, 7000);


bannerBtn.addEventListener("click", ({ target }) => {
  // console.log('clicked')
  if (target.classList.contains("btn__next") || target.classList.contains("right-arrow")) {
    console.log('next')
    if(counter === sliderImages.length - 1){
      counter = 0;
    } else{
      counter++;
    }
    changeImage();
  }

  if(target.classList.contains('btn__prev') || target.classList.contains("left-arrow")){
    if(counter === 0){
      counter = sliderImages.length - 1;
    } else{
      counter--;
    }
    changeImage();
  }  
});
