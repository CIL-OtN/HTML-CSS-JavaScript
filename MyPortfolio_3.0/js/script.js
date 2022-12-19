/* ===== Start: My-Portfolio Section  ===== */
const slideItemContainer = document.querySelector(".item-container");
const slideItems = document.querySelectorAll(".item");
const slideBtn = document.querySelectorAll(".button");

let current = 0;
let next = 1;
let prev = 4;

for(let i=0; i < slideBtn.length; i++) {
  slideBtn[i].addEventListener("click", () => {
    i == 0 ? gotoPrev() : gotoNext();
  })
}

const gotoPrev = () => {
  current > 0 ? gotoNum(current - 1) : gotoNum(slideItems.length - 1)
} 

const gotoNext = () => {
  current < 4 ? gotoNum(current + 1) : gotoNum(0);    // implement items as a variable in independance of count items in for
}

// Punkte hinzufügen!!!

const gotoNum = (number) => {
  current = number
  prev = current - 1;
  next = current + 1;  

  for(let i=0; i < slideItems.length; i++) {
    slideItems[i].classList.remove("active")
    slideItems[i].classList.remove("prev")
    slideItems[i].classList.remove("next")
  }

  if(next == 5) {
    next = 0;
  }

  if(prev == -1) {
    prev = 4;
  }

  slideItems[current].classList.add("active")
  slideItems[prev].classList.add("prev")
  slideItems[next].classList.add("next")
}


// https://www.mediaevent.de/javascript/arrow-function.html


/* ===== End: My-Portfolio Section  ===== */


const body = document.querySelector("body");

body.addEventListener("wheel", ()=> {
  console.log("you ar scrolling...")
})










/* ===== Aside Open & Close BEGIN ===== */
const navbar = document.querySelector(".navbar");
const navTogglerBtn = document.querySelector(".nav-toggler");


navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
    // console.log('addEvent löst aus')
})

asideSectionTogglerBtn = () => {
    navbar.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");


  // nächstes überall klicken dann geht das Menu zu!


//   for(let i=0; i < allSection.length; i++) {
//     allSection[i].classList.toggle("open");
//   }
}
/* ===== Aside Open & Close END ===== */