/* ===== Toggle Style Switcher ===== */
const styleSwitcherToggle = document.querySelector('.style-switcher-toggler');

styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle("open");
})

/* ===== Hide Style Switcher On Scroll ===== */
window.addEventListener("scroll", () => {
  if (document.querySelector('.style-switcher').classList.toggle("open")) {
    document.querySelector('.style-switcher').classList.remove("open")
  }
})

/* ===== Switcher Between Theme Colors ===== */
const alternateStyles = document.querySelectorAll('.alternate-style');

function setActiveStyle(color) 
{
  alternateStyles.forEach((style) => {
    if(color === style.getAttribute("title"))
    {
      style.removeAttribute("disabled");
    }
    else {
      style.setAttribute("disabled", "true");
    }
  })
}

/* ===== Switcher Between Dark & Light Theme Mode ===== */
const DayNight = document.querySelector(".day-night");

DayNight.addEventListener("click", () => {
  DayNight.querySelector("i").classList.toggle("fa-sun");
  DayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
})

window.addEventListener("load", () => {

  if(document.body.classList.contains("dark")) {
    DayNight.querySelector("i").classList.add("fa-sun");
  }
  else {
    DayNight.querySelector("i").classList.add("fa-moon");
  }
})