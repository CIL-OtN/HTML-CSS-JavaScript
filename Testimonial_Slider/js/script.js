
// ===== Testimonial Slider =====
var testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children);
var testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children);

var testimleftArrow = document.getElementById("left-arrow");
var testimRightArrow = document.getElementById("right-arrow"); 
    
var testimSpeed = 2000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer;



window.onload = function () {

    function playSlide(slide) {
        for (var i = 0; i < testimDots.length; i++) {
            testimContent[i].classList.remove("active");
            testimContent[i].classList.remove("inactive");
            testimDots[i].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length - 1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");
        }

        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;

        clearTimeout(testimTimer);
        testimTimer = setTimeout(function () {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }


    testimleftArrow.addEventListener('click', function () {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener('click', function () {
        playSlide(currentSlide += 1);
    })

    
    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener('click', function () {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);
}




document.addEventListener('DOMContentLoaded', function() {
   
   
    var stream = document.querySelector('.gallery__stream');
    var items = document.querySelectorAll('.gallery__item');
    
    var prev = document.querySelector('.gallery__prev');
    var next = document.querySelector('.gallery__next');
    
    
    prev.addEventListener('click', function() {
      stream.insertBefore(items[items.length - 1], items[0]);
      items = document.querySelectorAll('.gallery__item');
    });
    
    next.addEventListener('click', function() {
      stream.appendChild(items[0]);
      items = document.querySelectorAll('.gallery__item');
    });


  });