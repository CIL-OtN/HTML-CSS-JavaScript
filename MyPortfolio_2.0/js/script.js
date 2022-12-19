/* ===== Typing Animation ===== */
// var typed = new Typed(".typing", {
//   strings:["", "Web Designer", "Web Developer", "Graphic Designer", "YouTuber"],
//   typeSpeed:150,
//   backSpeed:100,
//   loop:true
// })



/* ===== Aside Menu & Section Slide left to right ===== */
// const nav = document.querySelector(".nav");
const navList = document.querySelectorAll("#nav-elem");
const allSection = document.querySelectorAll(".section");

for(let i=0; i < navList.length; i++) {
  // console.log(navList.length)

  const a = navList[i].querySelector("a");
  a.addEventListener("click", function() {

    removeBackSection();  // z-index: 1

    for(let j=0; j < navList.length; j++) {
      // console.log(navList)
      
      // only to see the "old" section in background meanwhile a new one slides from right to left
      if(navList[j].querySelector("a").classList.contains("active")) 
      {
        addBackSection(j);
      }

      navList[j].querySelector("a").classList.remove("active");
    }

    a.classList.add("active");
    showSection(this);
    
    if(window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  })
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

// as a precaution remove every .back-section css class in <section> elements with z-index: 1;
function removeBackSection() {
  for(let i=0; i < allSection.length; i++) {
    // console.log(allSection.length)
    // remove "back-section" class with z-index: 1; from element <section>
    allSection[i].classList.remove("back-section");
  }
}

function showSection(element) {

  for(let i=0; i < allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

// /*===== Switch To Another Section =====*/
function updateNav(element) {
  // console.log(element.getAttribute("href").split("#")[1])
  for(let i=0; i < navList.length; i++) {
    
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    
    if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

/*===== Hire Me Link to Contact Section BEGIN =====*/
document.querySelector(".hire-me").addEventListener("click", function() {
  const sectionIndex = this.getAttribute("data-section-index");
  
  // console.log(sectionIndex)

  showSection(this)
  updateNav(this)
  removeBackSection()
  addBackSection(sectionIndex)
})
/*===== Hire Me Link to Contact Section END =====*/

/*===== Link to About Me Section =====*/
//  document.querySelector(".logo-link").addEventListener("click", function() {
//    const sectionIndex = this.getAttribute("data-section-index");
//    const sectionIndex = 0;  
//    console.log(sectionIndex)

//    showSection(this);
//    updateNav(this);
//    removeBackSection()
//    addBackSection(sectionIndex)
//   })

/* ===== Aside Open & Close BEGIN ===== */
const navTogglerBtn = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");

  for(let i=0; i < allSection.length; i++) {
    allSection[i].classList.toggle("open");
  }
}
/* ===== Aside Open & Close END ===== */

/* ===== Services Modal PopUp BEGIN ===== */
const modalViews = document.querySelectorAll('.services__modal');

const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');
const modalCloseOutside = document.querySelectorAll('.services__modal');

 let modal = function(modalClick) {
   modalViews[modalClick].classList.add('active-modal')
 }

 modalBtns.forEach((modalBtn, i) => {
   modalBtn.addEventListener('click', () => {
     modal(i);
   })
 })

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})

modalCloseOutside.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal')
    })
  })
})
/* ===== Services Modal PopUp END ===== */

// ===== My Work BEGIN ===== 





// ===== My Work END =====  