// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

function setTurn() {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "It is player " + turn + "'s turn";
}

function setWinner(winner) {
    var turnElement = document.getElementById("turn");
    turnElement.innerText = "player" + winner + " wins";
    for (i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", onClick);
    }

}
function checkForWin() {
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < 9; i += 3) {
        if (cells[j].innerText &&
            cells[0 + i].innerText === cells[1 + i].innerText &&
            cells[1 + i].innerText === cells[2 + i].innerText) {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }

    for (var j = 0; i < 9; j += 3) {
        if (cells[j].innerText  &&
            cells[0 + j].innerText === cells[3 + j].innerText &&
            cells[3 + j].innerText === cells[6 + j].innerText) {
            setWinner(cells[0 + j].innerText);
            return true;
        }
    }

    //Check For diagnal
    return false
}
function onClick(event) {
    event.preventDefault();
    if (!event.target.innerText) {
        event.target.innerText = turn;
        if (turn === "x") { turn = "o"; }
        else { turn = "x"; }
        if (!checkForWin()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (i = 0; i < cells.length; i++ ){
    cells[i].addEventListener("click", onClick);
}
setTurn();