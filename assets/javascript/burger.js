let firstPlayer = 'X';

function handleClick(cellId) {
    const cell = document.getElementById(cellId);
    const resultatParagraphe = document.getElementById('resultat');

    if (cell.innerHTML === '') {
        cell.innerHTML = firstPlayer;

        if (checkWinner()) {
            resultatParagraphe.textContent = 'Joueur ' + firstPlayer + ' a gagné !';
            resetGame();
        } else {

            firstPlayer = firstPlayer === 'X' ? 'O' : 'X';
            if (firstPlayer == "O") {
                cpu()  
            }
        }
    }
}

function checkWinner() {
    const groups = [
        ['un', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        ['un', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        ['un', 'five', 'nine'],
        ['three', 'five', 'seven']
    ];

    for (const group of groups) {
        console.log(group);
        const [a, b, c] = group;
        const cellA = document.getElementById(a).innerHTML;
        const cellB = document.getElementById(b).innerHTML;
        const cellC = document.getElementById(c).innerHTML;

        if (cellA !== '' && cellA === cellB && cellB === cellC) {
            return true; 
        }
    }

    return false; 
}

function resetGame() {

    const cells = document.getElementsByClassName('case');
    for (const cell of cells) {
        cell.innerHTML = '';
    }
    firstPlayer = 'X';
}

function cpu() {
    console.log("dcvdfvdvb")
    let cells = document.querySelectorAll(".case")
    let random = randomize(0, cells.length - 1)
    while (cells[random].innerHTML != "") {
        random = randomize(0, cells.length - 1)
    }
    cells[random].click()
}
function randomize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}