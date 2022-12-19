
const menu = document.querySelector('#menu');


Array.from(document.querySelectorAll('.menu-item'))
    .forEach((item, index) => {
        
        item.onmouseover = () => { 
            menu.dataset.activeIndex = index;
            console.log(menu.dataset.activeIndex)
        }
    })






