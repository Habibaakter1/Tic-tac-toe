let currentPlayer = 'X';
let gameActive = true;

function makeMove(cell) {
    if (cell.innerText === '' && gameActive) {
        cell.innerText = currentPlayer;
        checkWin();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        updateStatus();
    }
}

function checkWin() {
    const cells = [
        document.getElementById('b1').innerText,
        document.getElementById('b2').innerText,
        document.getElementById('b3').innerText,
        document.getElementById('b4').innerText,
        document.getElementById('b5').innerText,
        document.getElementById('b6').innerText,
        document.getElementById('b7').innerText,
        document.getElementById('b8').innerText,
        document.getElementById('b9').innerText
    ];

    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
    ];

    for (const condition of winConditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            document.getElementById('status').innerText = `Player ${cells[a]} won!`;
            disableAllCells();
            gameActive = false;
            return;
        }
    }

    if (!cells.includes('')) {
        document.getElementById('status').innerText = "It's a tie!";
        gameActive = false;
    }
}

function updateStatus() {
    if (gameActive) {
        document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
    }
}

function disableAllCells() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => cell.disabled = true);
}

function resetGame() {
    const allCells = document.querySelectorAll('.cell');
    allCells.forEach(cell => {
        cell.innerText = '';
        cell.disabled = false;
    });
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('status').innerText = 'Player X’s turn';
}
