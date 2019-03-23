const initialSize = 16;
const gridWidth = 30; // in percent

function initializeBoard(size) {
    let squareSize = gridWidth/size; // in percent
    let numSquares = size * size;

    let gridContainer = document.querySelector('#gameGrid');

    gridContainer.style.gridTemplateRows = `${squareSize}vw `.repeat(size);
    gridContainer.style.gridTemplateColumns = `${squareSize}vw `.repeat(size);
    gridContainer.style.width = `${gridWidth}%`

    for (let i = 0; i < numSquares; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('gridSquare');
        gridItem.id = "square" + i;
        gridContainer.append(gridItem);
    }

    let cells = document.querySelectorAll('.gridSquare');

    cells.forEach((cell) => {
        cell.addEventListener('mouseover', shadeCell);
    });
    }

function shadeCell(e) {
    const cell = document.querySelector(`#${e.target.id}`);
    cell.classList.add('shadedSquare');
}

function resetBoard() {
    const newSize = prompt("Enter new grid size", "16");
    const gridContainer = document.querySelector('#gameGrid');
    // remove existing squares
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    initializeBoard(newSize);
}

const resetButton = document.querySelector("#resetBoard");

resetButton.addEventListener("click", resetBoard);

initializeBoard(initialSize);