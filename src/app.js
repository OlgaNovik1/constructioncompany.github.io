const images = document.querySelectorAll('.image'); 
// console.log(images);
const modal = document.querySelector('.modal');
const activeImage = document.querySelector('#active-image');
const overlay = document.querySelector('.overlay');
const closeIcon = document.querySelector('#close');


images.forEach(img => img.addEventListener('click', displayImage));

function displayImage(event) {
    activeImage.src = event.target.src;  /*по умолчанию у нас нет никакой ссылки на активную картинку в src в HTML */
    // console.log(event.target);
    // console.log(event.target.src);
    
    modal.style.display = 'block';
    overlay.style.display = 'block';
    
}



closeIcon.addEventListener('click', closeImage); /*закрыть по кнопке*/

function closeImage() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}


overlay.addEventListener('click', closeByOverlay); /*закрыть по фону */

function closeByOverlay() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}



const next = document.querySelector('#right');
next.addEventListener('click', nextImage);

let nextImageLet;
function nextImage() {
    for(let i = 0; i < images.length; i++ ) {
        if(activeImage.src === images[i].src) {
              nextImageLet = images[i].nextElementSibling;
        }
    }
   

    if(nextImageLet === null) {
        activeImage.src = images[0].src;
    } else {
        activeImage.src = nextImageLet.src;
    }
}




const previous = document.querySelector('#left');
previous.addEventListener('click', previousImage);


function previousImage() {
    for(let i = 0; i < images.length; i++ ) {
        if(activeImage.src === images[i].src) {
              nextImageLet = images[i].previousElementSibling;
        }
    }
   

    if(nextImageLet === null) {
        activeImage.src = images[images.length - 1].src;
    } else {
        activeImage.src = nextImageLet.src;
    }
}


