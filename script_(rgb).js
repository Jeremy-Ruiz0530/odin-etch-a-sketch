const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

const BOARD_SIZE = 960;
let isMouseDown = false;

document.addEventListener("mousedown", () => isMouseDown = true);
document.addEventListener("mouseup", () => isMouseDown = false);

function getRandomRGB() {
    const r = getRandomInt(0, 255);
    const g = getRandomInt(0, 255);
    const b = getRandomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createGrid(squaresPerSide) {
    container.innerHTML = "";
    const squareSize = BOARD_SIZE / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener("mousedown", (e) => {
            e.preventDefault();
            square.style.backgroundColor = getRandomRGB();
        });

        square.addEventListener("mouseover", () => {
                square.style.backgroundColor = getRandomRGB();
        });
        container.appendChild(square);
    }
}

resizeBtn.addEventListener("click", () => {     // Button for Change Grid Size
    let input = prompt("Enter number of squares per side (Max 100):");
    let squares = parseInt(input);

    if (isNaN(squares) || squares <= 0) {
        alert("Please enter a valid positive number.");
    } else if (squares > 100) {
        alert("Number is too high! Maximum allowed is 100 to prevent crashing.");
    } else {
        createGrid(squares);
    }
});

createGrid(16); // Default Grid Lines
