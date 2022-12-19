let sliderContainer = document.querySelector('.slider-container');    // gallery
let slides = document.querySelectorAll('.slide');     // stream

const prevSlide = document.querySelector('.btn-prev')
const nextSlide = document.querySelector('.btn-next');

let currentSlide = 0;
let maxSlide = slides.length - 1;

let slideSpeed = 1000;
let sliderTime;


// window.onload = function () {

// playSlide = (funCurrSlide) => {


    // clearTimeout(sliderTime);

    // sliderTime = setTimeout( () => {

    //     if(funCurrSlide === maxSlide) {
    //         funCurrSlide = 0;
    //     } else {
    //         funCurrSlide++;
    //     }

    //     slides.forEach((slide, idx) => {
    //         slide.style.transform = `translateX(${100 * (idx - funCurrSlide)}%)`; 
    //         console.log(100 * (idx - funCurrSlide))
    //     }); 
 
    //     playSlide(funCurrSlide)
    // }, slideSpeed)
// }


nextSlide.addEventListener('click', () => {

    if(currentSlide === maxSlide) {
        // currentSlide = 0;
        sliderContainer.appendChild(slides[0])
        slides = document.querySelectorAll('.slide');
        currentSlide = 0; 

    } else {
        currentSlide++;       
    }

    slides.forEach((slide, idx) => {
       
        console.log('Start foward')
        // slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`; 
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`; 
        
        // playSlide(currentSlide);
    }); 
});


prevSlide.addEventListener('click', () => {
    
    if(currentSlide === 0) {    

        sliderContainer.appendChild(slides[0])
        slides = document.querySelectorAll('.slide');

        sliderContainer.insertBefore(slides[slides.length -1], slides[0])
        slides = document.querySelectorAll('.slide');
        currentSlide = maxSlide;

    } else {
        currentSlide--;
    }

    slides.forEach((slide, idx) => {
        
        console.log('Start backward')
        slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`; 
        
        // playSlide(currentSlide);
    });  
});

// playSlide(currentSlide);

// }



// Anmerkung:
// let slideArr = [...document.querySelectorAll('.slide')]
// console.log(slideArr[1])

