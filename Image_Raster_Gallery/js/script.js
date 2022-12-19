
// function myFunction(smallImg) {
//     let fullImg = document.querySelector('#imageBox')

//     fullImg.src = smallImg.src
// }

let fullImg = document.querySelector('#imageBox');
let smallImg = document.querySelectorAll('#imageSmall')

smallImg.forEach(item => {
    item.addEventListener('click', () => {
        fullImg.src = item.src;
    })
});

// smallImg.forEach(changeImgSrc)

// function changeImgSrc(item) {
//     item.addEventListener('click', () => {
//         // console.log(item.src)
//         fullImg.src = item.src;

//     })
// }

