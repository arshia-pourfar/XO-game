function checkWinnerFunc() {
    if (section1.textContent == section2.textContent && section2.textContent == section3.textContent &&
        section1.textContent != "" ||
        section1.textContent == section4.textContent && section4.textContent == section7.textContent &&
        section4.textContent != "" ||
        section1.textContent == section5.textContent && section5.textContent == section9.textContent &&
        section5.textContent != "" ||
        section2.textContent == section5.textContent && section5.textContent == section8.textContent &&
        section2.textContent != "" ||
        section4.textContent == section5.textContent && section5.textContent == section6.textContent &&
        section6.textContent != "" ||
        section3.textContent == section6.textContent && section6.textContent == section9.textContent &&
        section3.textContent != "" ||
        section7.textContent == section8.textContent && section8.textContent == section9.textContent &&
        section8.textContent != "" ||
        section3.textContent == section5.textContent && section5.textContent == section7.textContent &&
        section7.textContent != "") {
        if (checkPlayerForClick == 2) {
            document.getElementById("div-point-player-o").style.backgroundColor = "#00000091";
            document.getElementById("div-point-player-x").style.backgroundColor = "#003cff";
            pointPlayerX++;
            checkWinner = "X";
            checkPlayerForClick = 3;
        } else if (checkPlayerForClick == 1) {
            document.getElementById("div-point-player-o").style.backgroundColor = "#f00";
            document.getElementById("div-point-player-x").style.backgroundColor = "#00000091";
            pointPlayerO++;
            checkWinner = "O";
            // if (computerGame == true) {
            //     round = 2;
            //     checkPlayerForClick = 2;
            // } else {
            //     checkPlayerForClick = 3;
            // }
            checkPlayerForClick = 3;

        }
        textPointPlayerX.textContent = inputNamePlayerX + " : " + pointPlayerX;
        textPointPlayerO.textContent = inputNamePlayerO + " : " + pointPlayerO;
        winnerTrueOrFalse = true;
        startConfetti();
        sectionBackgrandColor();
    } else if (round >= 9) {
        textPointPlayerX.textContent = inputNamePlayerX + " : " + pointPlayerX;
        textPointPlayerO.textContent = inputNamePlayerO + " : " + pointPlayerO;
        var interval = setInterval(timerResetGame, 2000);

        function timerResetGame() {
            resetAllSections();
            if (checkPlayerForClick == 1) {
                checkWinner = "O";
                checkPlayerForClick = 2;
            } else if (checkPlayerForClick == 2) {
                checkPlayerForClick = 1;
                checkWinner = "X";
            }
            round = 0;
            winnerTrueOrFalse = false;
            document.getElementById("btn-reset-this-match").style.visibility = "hidden";
            clearInterval(interval);
        }
    }
}

function resetThisMatch() {
    if (checkPlayerForClick == 2 && checkWinner == "X") {
        document.getElementById("div-point-player-o").style.backgroundColor = "#00000091";
        document.getElementById("div-point-player-x").style.backgroundColor = "#003cff";
        checkPlayerForClick = 1;
        round = 0;
    } else if (checkPlayerForClick == 1 && checkWinner == "O") {
        document.getElementById("div-point-player-o").style.backgroundColor = "#f00";
        document.getElementById("div-point-player-x").style.backgroundColor = "#00000091";
        checkPlayerForClick = 1;
        round = 0;
    }
    winnerTrueOrFalse = false;
    animationActive = false;
    resetAllSections();
    document.getElementById("btn-reset-this-match").style.visibility = "hidden";
}

function startConfetti() {
    var duration = 5000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 300, ticks: 100, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    var intervall = setInterval(timerResetGame, 5000);

    function timerResetGame() {
        resetAllSections();
        if (checkWinner == "X") {
            checkPlayerForClick = 1;
        } else {
            checkPlayerForClick = 2;
        }
        // else if (checkWinner == "O") {
        //     if (computerGame == true) {
        //         randomSelectSectionfunc();
        //         checkPlayerForClick = 2;
        //     } else {
        //         round = 0;
        //     }
        // }
        round = 0;
        document.getElementById("btn-reset-this-match").style.visibility = "hidden";
        winnerTrueOrFalse = false;
        clearInterval(intervall);
    }

}

function startGame() {
    inputNamePlayerX = document.getElementById("name-player-x").value;
    inputNamePlayerO = document.getElementById("name-player-o").value;
    if (inputNamePlayerO != "" && inputNamePlayerX != "") {
        textPointPlayerX.textContent = inputNamePlayerX + " : " + pointPlayerX;
        textPointPlayerO.textContent = inputNamePlayerO + " : " + pointPlayerO;
        mainCreatNamePlayer.style.visibility = "hidden";
    } else if (inputNamePlayerX == "") {
        document.getElementById("name-player-x").focus();
    } else if (inputNamePlayerO == "") {
        document.getElementById("name-player-o").focus();
    }
}

function resetAllGame() {
    document.getElementById("div-point-player-o").style.backgroundColor = "#00000091";
    document.getElementById("div-point-player-x").style.backgroundColor = "#003cff";
    textPointPlayerX.textContent = inputNamePlayerX + " : " + "0";
    textPointPlayerO.textContent = inputNamePlayerO + " : " + "0";
    checkPlayerForClick = 1;
    checkWinner = "X";
    round = 0;
    winnerTrueOrFalse = false;
    animationActive = false;
    pointPlayerX = 0;
    pointPlayerO = 0;
    resetAllSections();
    document.getElementById("btn-reset-this-match").style.visibility = "hidden";
}

function resetAllSections() {
    section1.textContent = "";
    section2.textContent = "";
    section3.textContent = "";
    section4.textContent = "";
    section5.textContent = "";
    section6.textContent = "";
    section7.textContent = "";
    section8.textContent = "";
    section9.textContent = "";
    section1.style.backgroundColor = "#fff";
    section2.style.backgroundColor = "#fff";
    section3.style.backgroundColor = "#fff";
    section4.style.backgroundColor = "#fff";
    section5.style.backgroundColor = "#fff";
    section6.style.backgroundColor = "#fff";
    section7.style.backgroundColor = "#fff";
    section8.style.backgroundColor = "#fff";
    section9.style.backgroundColor = "#fff";
}

function sectionBackgrandColor() {
    if (section1.textContent == section2.textContent && section2.textContent == section3.textContent &&
        section1.textContent != "") {
        section1.style.backgroundColor = "green";
        section2.style.backgroundColor = "green";
        section3.style.backgroundColor = "green";
    } else if (section1.textContent == section4.textContent && section4.textContent == section7.textContent &&
        section4.textContent != "") {
        section1.style.backgroundColor = "green";
        section4.style.backgroundColor = "green";
        section7.style.backgroundColor = "green";
    } else if (section1.textContent == section5.textContent && section5.textContent == section9.textContent &&
        section5.textContent != "") {
        section1.style.backgroundColor = "green";
        section5.style.backgroundColor = "green";
        section9.style.backgroundColor = "green";
    } else if (section2.textContent == section5.textContent && section5.textContent == section8.textContent &&
        section2.textContent != "") {
        section2.style.backgroundColor = "green";
        section5.style.backgroundColor = "green";
        section8.style.backgroundColor = "green";
    } else if (section4.textContent == section5.textContent && section5.textContent == section6.textContent &&
        section6.textContent != "") {
        section4.style.backgroundColor = "green";
        section5.style.backgroundColor = "green";
        section6.style.backgroundColor = "green";
    } else if (section3.textContent == section6.textContent && section6.textContent == section9.textContent &&
        section3.textContent != "") {
        section3.style.backgroundColor = "green";
        section6.style.backgroundColor = "green";
        section9.style.backgroundColor = "green";
    } else if (section7.textContent == section8.textContent && section8.textContent == section9.textContent &&
        section8.textContent != "") {
        section7.style.backgroundColor = "green";
        section8.style.backgroundColor = "green";
        section9.style.backgroundColor = "green";
    } else if (section3.textContent == section5.textContent && section5.textContent == section7.textContent &&
        section7.textContent != "") {
        section3.style.backgroundColor = "green";
        section5.style.backgroundColor = "green";
        section7.style.backgroundColor = "green";
    }
}

// function randomSelectSectionfunc() {
//     randomSection = Math.floor(Math.random() * 9) + 1;
//     selectSectionfunc();
// }

// function selectSectionfunc() {
//     if (randomSection == 1 && section1.textContent == "") {
//         section1.textContent = "O";
//         section1.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 2 && section2.textContent == "") {
//         section2.textContent = "O";
//         section2.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 3 && section3.textContent == "") {
//         section3.textContent = "O";
//         section3.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 4 && section4.textContent == "") {

//         section4.textContent = "O";
//         section4.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 5 && section5.textContent == "") {

//         section5.textContent = "O";
//         section5.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 6 && section6.textContent == "") {

//         section6.textContent = "O";
//         section6.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 7 && section7.textContent == "") {
//         section7.textContent = "O";
//         section7.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 8 && section8.textContent == "") {

//         section8.textContent = "O";
//         section8.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else if (randomSection == 9 && section9.textContent == "") {
//         section9.textContent = "O";
//         section9.style.color = "red";
//         checkPlayerForClick = 1;
//         round++;

//     } else {
//         randomSelectSectionfunc();
//     }
//     checkWinnerFunc();
// }