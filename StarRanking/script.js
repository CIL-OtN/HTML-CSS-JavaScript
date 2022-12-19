let starsContainer = document.querySelector('#stars')
let active = -1

for(let i=0; i < 5; i++) {

    let starImg = document.createElement("img");

    // <img class="star-style" src="./star-regular.svg>"
    starImg.src = "./star-regular.svg";
    starImg.className = "star-style";
    starsContainer.appendChild(starImg)

    // EventListener
    starImg.addEventListener('mouseover', () => onStarHover(i))
    starImg.addEventListener('mouseleave', () => onStarOut)
    starImg.addEventListener('click', () => onStarClick(i))
}

let stars = document.querySelectorAll('.star-style');

function onStarHover(i) {
    // console.log("Star Hover " + i)
    fillStar(i);
}

function onStarOut() {
    // console.log("Mouse left " )
    fillStar(active)
}

function onStarClick(i) {
    // console.log("Auf Stern geklick^^" + i)    
    active = i
    document.querySelector('#display-star-value').innerHTML = i + 1;
    fillStar(active)
}

function fillStar(ratingValue) {
    for(let i=0; i < 5; i++) {

        if(i <= ratingValue) {
            stars[i].src = "./star-solid.svg"
        } else {
            stars[i].src = "./star-regular.svg"
        }


    }
}