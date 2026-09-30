const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

const BOARD_SIZE = 960;

function createGrid(squaresPerSide) {        // Creating a Grid
    container.innerHTML = "";
    const squareSize = BOARD_SIZE / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;


        square.addEventListener("mouseenter", () => {       // when hover
            square.style.backgroundColor = "#333";
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
