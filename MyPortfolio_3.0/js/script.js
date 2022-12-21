/* ===== Start: Nav-Bar Scroll Up and Down  ===== */

const navbar = document.querySelector(".navbar");
const navTogglerBtn = document.querySelector(".nav-toggler");
const mainContainer = document.querySelector(".main-container");

let lastScroll = 0;

// Verbiete die Fähigkeit innerhalb der Navigationsleiste die ganze Seite zu auf und ab zu scrollen
navbar.addEventListener("wheel", (e) => {
  e.preventDefault();
  e.stopPropagation();

  return false;
});

// Beim auf und ab scrollen erscheint oder verschwindet die Navigationsleiste ab window.size 770px
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset; /* chatGPT pageYOffset */

  if (currentScroll > lastScroll && window.innerWidth > 770) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0px";
  }

  lastScroll = currentScroll;
});

// Toggle den Button der die Navigationsleiste öffnet und schließt
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

// Bei mouseclick außerhabl von der Navigationsleiste, schiebe es zurück
mainContainer.addEventListener("click", () => {
  navbar.classList.remove("open");
  navTogglerBtn.classList.remove("open");
});

// Toggle die Navigationsleiste
asideSectionTogglerBtn = () => {
  navbar.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
};
/* ===== End: Nav-Bar Scroll Up and Down ===== */

/* ===== Start: My-Portfolio Section  ===== */
const slideItemContainer = document.querySelector(".item-container");
const slideItems = document.querySelectorAll(".item");
const slideBtn = document.querySelectorAll(".button");

let current = 0;
let next = 1;
let prev = 4;

for (let i = 0; i < slideBtn.length; i++) {
  slideBtn[i].addEventListener("click", () => {
    i == 0 ? gotoPrev() : gotoNext();
  });
}

const gotoPrev = () => {
  current > 0 ? gotoNum(current - 1) : gotoNum(slideItems.length - 1);
};

const gotoNext = () => {
  current < 4 ? gotoNum(current + 1) : gotoNum(0); // implement items as a variable in independance of count items in for
};

// Punkte hinzufügen!!!

const gotoNum = (number) => {
  current = number;
  prev = current - 1;
  next = current + 1;

  for (let i = 0; i < slideItems.length; i++) {
    slideItems[i].classList.remove("active");
    slideItems[i].classList.remove("prev");
    slideItems[i].classList.remove("next");
  }

  if (next == 5) {
    next = 0;
  }

  if (prev == -1) {
    prev = 4;
  }

  slideItems[current].classList.add("active");
  slideItems[prev].classList.add("prev");
  slideItems[next].classList.add("next");
};

// https://www.mediaevent.de/javascript/arrow-function.html

/* ===== End: My-Portfolio Section  ===== */


