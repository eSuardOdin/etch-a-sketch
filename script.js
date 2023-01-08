// DOM elements :
const slide = document.querySelector('.slider');
const slideBtn = document.querySelector('.slide-btn');
const sizeText = document.querySelector('.size-text');
const grid = document.querySelector('.grid-container');

const getGridSize = () => {
    console.log(slide.value);
}
const refreshSizeText = () => {
    sizeText.textContent = `${slide.value} X ${slide.value}`;
}

const createGrid = (size) => {

    for(let y = 0; y < size; y++){
        for(let i = 0; i < size; i++) {
            let pix = document.createElement('div');
            pix.classList.toggle('grid-pixel');
            pix.setAttribute('style', `width: ${500/size}px; height: ${(500/ size)}px;`);
            pix.innerText = `${i+1}`;
            grid.appendChild(pix);
        }
    }

}
slideBtn.addEventListener('click', getGridSize);


refreshSizeText();

slide.addEventListener('input', refreshSizeText);

createGrid(slide.value);