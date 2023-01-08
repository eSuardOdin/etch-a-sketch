// DOM elements :
const slide = document.querySelector('.slider');
const slideBtn = document.querySelector('.slide-btn');
const sizeText = document.querySelector('.size-text');
const grid = document.querySelector('.grid-container');

// let mouseDown = false;
// document.body.onmousedown = () => (mouseDown = true);
// document.body.onmouseup = () => (mouseDown = false);

const refreshSizeText = () => {
    slideBtn.textContent = `Resize ${slide.value} X ${slide.value}`;
}

const hoverPixel = (pix) => {
    // if(!mouseDown) return;
    pix.classList.add('active');
}

const createGrid = (size) => {
    grid.innerText = '';
    for(let y = 0; y < size; y++){ // Create a column
        let col = document.createElement('div');
        col.classList.toggle('grid-row');
        
        for(let i = 0; i < size; i++) { // Create a pixel
            let pix = document.createElement('div');
            pix.classList.toggle('grid-pixel');
            pix.setAttribute('style', `width: ${600/size}px; height: ${(600/ size)}px;`);
            pix.addEventListener('mouseenter', () => hoverPixel(pix));
            col.appendChild(pix);
        }
        grid.appendChild(col)
    }

}
slideBtn.addEventListener('click', () => createGrid(slide.value));


refreshSizeText();

slide.addEventListener('input', refreshSizeText);

createGrid(slide.value);