// width and height in pixels
const GridContainerHeight = 800;
const GridContainerWidth = 800;

let gridContainer = document.querySelector('.grid-container');
let colorPicker = document.querySelector('input[type="color"]');

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
                grid.style.backgroundColor = colorPicker.value;
            });
            rowContainer.appendChild(grid);
        }
        gridContainer.appendChild(rowContainer);
    }
}

window.addEventListener('load', (event) => {
    createGrid(16);
});

let changeSize = document.querySelector('.change-size');

changeSize.addEventListener('click', (event) => {
    let size = parseInt(prompt('Enter the size: '));
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    createGrid(size);
});
