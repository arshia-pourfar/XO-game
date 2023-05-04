var section = document.querySelectorAll(".section");
var section1 = document.getElementById("section-1");
var section2 = document.getElementById("section-2");
var section3 = document.getElementById("section-3");
var section4 = document.getElementById("section-4");
var section5 = document.getElementById("section-5");
var section6 = document.getElementById("section-6");
var section7 = document.getElementById("section-7");
var section8 = document.getElementById("section-8");
var section9 = document.getElementById("section-9");
var mainCreatNamePlayer = document.getElementById("main-creat-name-player");
var textPointPlayerX = document.getElementById("player-x");
var textPointPlayerO = document.getElementById("player-o");

// var computerGame = false;
// var randomSection = 0;
// var planComputerPlayer = 0;
var inputNamePlayerX, inputNamePlayerO;
var checkPlayerForClick = 1;
var checkWinner = "X";
var winnerTrueOrFalse = false;
var round = 0;
var animationActive = false;
var pointPlayerX = 0;
var pointPlayerO = 0;

$("#btn-reset-game").click(function () {
    resetAllGame();
})

$("#btn-reset-this-match").click(function () {
    resetThisMatch();
})

$("#btn-start-game").click(function () {
    startGame();
    twoPlayer();
})

$("#btn-start-game-default").click(function () {
    twoPlayer();
    inputNamePlayerX = "PLayer X ";
    inputNamePlayerO = "PLayer O ";
    textPointPlayerX.textContent = inputNamePlayerX + " : " + pointPlayerX;
    textPointPlayerO.textContent = inputNamePlayerO + " : " + pointPlayerO;
    mainCreatNamePlayer.style.visibility = "hidden";
})

$("#btn-play-computer-game").click(function () {
    inputNamePlayerX = "PLayer X ";
    inputNamePlayerO = "Computer ";
    textPointPlayerX.textContent = inputNamePlayerX + " : " + pointPlayerX;
    textPointPlayerO.textContent = inputNamePlayerO + " : " + pointPlayerO;
    mainCreatNamePlayer.style.visibility = "hidden";
    // computerGame();
    // computerGame = true;
})

function twoPlayer() {
    section.forEach(element => {
        element.addEventListener("click", (e) => {
            if (e.target.textContent == "" && winnerTrueOrFalse == false) {
                if (checkPlayerForClick == 1) {
                    document.getElementById("btn-reset-this-match").style.visibility = "visible";
                    document.getElementById("div-point-player-o").style.backgroundColor = "#f00";
                    document.getElementById("div-point-player-x").style.backgroundColor = "#00000091";
                    e.target.textContent = "X";
                    e.target.style.color = "blue";
                    checkPlayerForClick = 2;
                    round++;
                } else if (checkPlayerForClick == 2) {
                    document.getElementById("btn-reset-this-match").style.visibility = "visible";
                    document.getElementById("div-point-player-o").style.backgroundColor = "#00000091";
                    document.getElementById("div-point-player-x").style.backgroundColor = "#003cff";
                    e.target.textContent = "O";
                    e.target.style.color = "red";
                    checkPlayerForClick = 1;
                    round++;
                }
                checkWinnerFunc();
            }
        })
    })
}