let gridSize = Math.pow(16,16);

let gridContainer = document.querySelector('gameGrid');

for (let i = 0; i < gridSize; i++) {
    let gridItem = document.createElement('div');
    gridItem.classList.add('gridSquare');
    gridItem.id = i;
}