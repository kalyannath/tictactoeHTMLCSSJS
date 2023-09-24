
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    let boardValues = {
        row1: ["X", "X", "X"],
        row2: ["O", "O", "O"],
        row3: ["X", "X", "X"],
    };

    
    // Loop through rows and columns to update the content
    for (let row = 1; row <= 3; row++) {
        for (let col = 1; col <= 3; col++) {
            const cellClass = `.r${row}c${col}`;
            const cellElement = document.querySelector(cellClass);

            if (cellElement) {
                // Update the content of the cell based on boardValues
                cellElement.innerHTML = boardValues[`row${row}`][col - 1];
            } else {
                console.error(`Element with class '${cellClass}' not found.`);
            }
        }
    }
});
