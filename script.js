let square = document.querySelectorAll(".square")
let restart = document.getElementById("restart")
let countX = document.getElementById("countx")
let countO = document.getElementById("counto")
let result = document.querySelector(".result")
let resultp = document.querySelector(".result p")
let winnerInput = document.querySelector(".winner")
let returnDiv = document.querySelector(".returns div")
let divx = document.querySelector(".divx")
let divo = document.querySelector(".divo")
let squares = [];
let turn = "x"


theTurn()


function game(id) {
    let element = document.getElementById(id);

    if (turn === "x" && element.innerHTML == "") {
        element.innerHTML = "x";
        turn = "o";
    } else if (turn === "o" && element.innerHTML == "") {
        element.innerHTML = "o";
        turn = "x";
    }
    winner()
    equall()
    theTurn()
}

function winner() {
    for (let i = 1; i < 10; i++) {
        squares[i] = document.getElementById(`item${i}`).innerHTML
    }

    if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] != "") {
        passTheWinner(1, 2, 3)
    } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] != "") {
        passTheWinner(4, 5, 6)
    } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] != "") {
        passTheWinner(7, 8, 9)


    } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[5] != "") {
        passTheWinner(1, 5, 9)
    } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] != "") {
        passTheWinner(3, 5, 7)


    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] != "") {
        passTheWinner(1, 4, 7)
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] != "") {
        passTheWinner(2, 5, 8)
    } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] != "") {
        passTheWinner(3, 6, 9)
    }
}


function equall() {
    tries = 0;
    square.forEach((e) => {
        if (e.innerHTML != "") {
            tries++;
        }
    })
    if (tries === 9) {
        winnerInput.innerHTML = "X O"
        resultp.innerHTML = "EQUALL"
        finish()
    }
}

function theTurn() {
    if (turn === "x") {
        divx.style.cssText = "border-bottom: 2px solid red;"
        divo.style.cssText = "border-bottom: 2px solid transparent;"
    }
    if (turn === "o") {
        divo.style.cssText = "border-bottom: 2px solid red;"
        divx.style.cssText = "border-bottom: 2px solid transparent;"
    }
}


function passTheWinner(num1, num2, num3) {
    let theWinner = squares[num1]
    winnerInput.innerHTML = theWinner
    countPoint(theWinner)
    finish(theWinner)


    let elementWin1 = document.getElementById(`item${num1}`)
    let elementWin2 = document.getElementById(`item${num2}`)
    let elementWin3 = document.getElementById(`item${num3}`)

    elementWin1.style.backgroundColor = "red"
    elementWin2.style.backgroundColor = "red"
    elementWin3.style.backgroundColor = "red"

    
    square.forEach((e) => {
        if (e === elementWin1 || e === elementWin2 || e === elementWin3) {
            e.style.margin = "0px"
            e.style.borderRadius = "0px"
        } else {
            e.innerHTML = "";
            e.style.margin = "0px"
            e.style.borderRadius = "0px"
        }

    })

    square.forEach((e) => {
        e.classList.add("stopclick")
    })
}

function countPoint(xo) {
    if (xo === "x") {
        countX.innerHTML++;
    } else if (xo === "o") {
        countO.innerHTML++;
    }
}



function finish(theWinner) {
    setTimeout(() => {
        square.forEach(element => {
            element.style.margin = "0"
            element.innerHTML = ""
            element.style.backgroundColor = "rgba(0, 255, 255, 0.755)"
        })
    }, 2000)

    setTimeout(() => {
        result.classList.add("show")
    }, 2200)
}




restart.addEventListener("click", () => {

    result.classList.remove("show")

    square.forEach(element => {
        element.style.margin = "2px"
        element.innerHTML = ""
    })

    square.forEach((e) => {
        e.classList.remove("stopclick")
    })

    theTurn()
})