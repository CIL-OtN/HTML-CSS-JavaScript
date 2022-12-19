const fileInput = document.querySelector('.file-input');

let previewImg = document.querySelector('img');   // PROBLEM: As long I do not need a second img container!
let chooseImgBtn = document.querySelector('.choose-img');
let filterOptions = document.querySelectorAll('.filter button')
let filterName = document.querySelector('.filter-info .name')
let filterValue = document.querySelector('.filter-info .value')
let filterSlider = document.querySelector('.slider input')
let rotateOptions = document.querySelectorAll('.rotate button')
let resetFilterBtn = document.querySelector('.reset-filter');
let saveImgBtn = document.querySelector('.save-img');
// weiter bei 43min

let brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
let rotate = 0, flipHorizontal = 1, flipVertical = 1;

const applyFilters = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`
    // console.log(`${brightness}%`)
}

// All <input> element nodes have a files attribute of type FileList on them which allows acces to the items in this list.
// The line fetches the first file in the node's file list as a File object.
const loadImage = () => {
    // console.log('called function loadImage')
    let file = fileInput.files[0];
    if(!file) return;   // return if user has not selected a file

    // The URL.createObjectURL() static method creates a string containing a URL representing the object given in the paramenter.
    // The new object URL represents the specified File object or Blob object.
    previewImg.src = URL.createObjectURL(file); 
    // console.log('Blob object: ' + previewImg.src)
    
    // Remove disable class from .container once user selects and load the image he choosed
    previewImg.addEventListener('load', () => {
        resetFilterBtn.click();
        document.querySelector('.container').classList.remove('disable');
    });
}

// 2. Options between brightness saturation inversion and grayscale have ther own slider value
filterOptions.forEach(option => {
    
    option.addEventListener('click', () => {
        // Selecting active class and removing from the button and adding this class on the current clicked button
        document.querySelector('.filter .active').classList.remove('active');
        option.classList.add('active')
        filterName.innerText = option.innerText; 

        if(option.id === "brightness") {    // option.id is possible if the elements have an id=""
            // console.log(option.id)
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;

        } else  if(option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`;     

        } else  if(option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;

        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;     

        }
    })
})

// Parameter for the slider
const updateFilter = () => {
    // console.log(filterSlider.value)
    filterValue.innerText = `${filterSlider.value}%`;
    // console.log(`${filterSlider.value}%`)
    const selectedFilter = document.querySelector('.filter .active');   // getting selected filter btn
    // console.log(selectedFilter.id) in example id: "brightness"
    // If selected filter is brightness, pass the slider value as brightness value
    if(selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
        // console.log(brightness)
    } else if (selectedFilter.id === "saturation") {
        saturation = filterSlider.value;
    } else if (selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }

    applyFilters();
}

rotateOptions.forEach(option => {
    option.addEventListener('click', () => {    // adding click event listener to all rotate/flip buttons
        
        if(option.id === "left" ) {
            // console.log(option.id)
            rotate -= 90;
            // console.log(rotate)
        } else if(option.id === "right") {
            rotate += 90;
        } else if(option.id == "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;    
        }

        applyFilters();
    })
})

const resetFilter = () => {
    console.log('Reset Filter')
    brightness = 100, saturation = 100, inversion = 0, grayscale = 0;
    rotate = 0, flipHorizontal = 1, flipVertical = 1;
    filterOptions[0].click();   // clicking brightness option to be default too
    applyFilters();
}


const saveImage = () => {
    const canvas = document.createElement('canvas');    // creating canvas element
    const ctx = canvas.getContext('2d');                // canvas.getContext return a drawing context on the canvas
    canvas.width = previewImg.naturalWidth;             // setting canvas width to actual image width
    canvas.height = previewImg.naturalHeight;           // setting canvas height to actual image height

    ctx.translate(canvas.width / 2, canvas.height / 2); // translating canvas from center
    
    if(rotate !== 0) {
        ctx.rotate(rotate * Math.PI / 180);
    }
    
    ctx.scale(flipHorizontal, flipVertical)     // flip canvas, horizontally / vertically
    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.drawImage(previewImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);   // drawImage(image to draw, dx, dy, dWidth, dHeight)

    const link = document.createElement('a');   // creating <a> element
    link.download = "image.jpg";                // passing <a> tag download value to "image.jpg"
    // toDataURL returns a data URL containing a representation of image
    link.href = canvas.toDataURL();             // passing <a> tag href value to canvas data url
    link.click();                               // clicking <a> tag so the image download

}

// The change event is fired for <input>, <select> and <textarea> elements when an alteration 
// to the element's value is commited by the user.
fileInput.addEventListener('change', loadImage);        // 'change' - Event ???
filterSlider.addEventListener('input', updateFilter);   // 'input' - Event ???
resetFilterBtn.addEventListener('click', resetFilter);
saveImgBtn.addEventListener('click', saveImage);

// The click() method simulates a mouse-click on fileInput with CHOOSE chooseImgBtn! 
chooseImgBtn.addEventListener('click', () => { 
    fileInput.click()
});


// Weiter bei 46:04min

























