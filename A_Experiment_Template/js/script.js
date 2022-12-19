const slider = document.querySelector("#slider");
const slides = document.querySelectorAll(".slides img");

let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 300);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}