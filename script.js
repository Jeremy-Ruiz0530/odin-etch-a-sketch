const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resize-btn");

const BOARD_SIZE = 960; // Total width/height of container in pixels

function createGrid(squaresPerSide) {
    // Clear out any existing grid items first
    container.innerHTML = "";

    // Calculate exact size of each square to fit 960px
    const squareSize = BOARD_SIZE / squaresPerSide;
    const totalSquares = squaresPerSide * squaresPerSide;

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        
        // Set dynamic dimensions using flex-basis or explicit width/height
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add hover effect listener
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "#333"; // Changes color on hover
        });

        container.appendChild(square);
    }
}

// Event listener for the resize button
resizeBtn.addEventListener("click", () => {
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

// Initialize default 16x16 grid on page load
createGrid(16);