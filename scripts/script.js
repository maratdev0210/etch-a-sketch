// width and height in pixels
const GridContainerHeight = 800;
const GridContainerWidth = 800;
let randomize = false; // randomize the color of the grid

let gridContainer = document.querySelector('.grid-container');
let colorPicker = document.querySelector('input[type="color"]');

function generateColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red} ${green} ${blue})`; 
    return color;
}

function createGrid(size)
{
    for (let row = 0; row < size; ++row) {
        let rowContainer = document.createElement('div'); // store each row divs inside one container
        for (let col = 0; col < size; ++col) {
            let grid = document.createElement('div');
            grid.classList.add('grid');
            let gridHeight = GridContainerHeight / size;
            let gridWidth = GridContainerWidth / size; 
            grid.style.width = `${gridWidth}px`;
            grid.style.height = `${gridHeight}px`;
            grid.addEventListener('mouseover', (event) => {
                if (randomize == true) {
                    grid.style.backgroundColor = generateColor();
                    return;
                }
                grid.style.backgroundColor = colorPicker.value;
            });
            rowContainer.appendChild(grid);
        }
        gridContainer.appendChild(rowContainer);
    }
}

let sizeChange = document.querySelector('input[type="range"]');
let displaySize = document.querySelector('.grid-size span');

window.addEventListener('load', (event) => {
    createGrid(16);
    displaySize.textContent = "Grid: " + sizeChange.value + " X " + sizeChange.value;
});

let changeSize = document.querySelector('.change-size');
let randomColors = document.querySelector('.random');

randomColors.addEventListener('click', () => {
    randomize = true;
});

colorPicker.addEventListener('click', () => {
    randomize = false;
});

sizeChange.addEventListener('click', (event) => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(sizeChange.value);
    displaySize.textContent = "Grid: " + sizeChange.value + " X " + sizeChange.value;
});
