// function computerGame() {
//     section.forEach(element => {
//         element.addEventListener("click", (e) => {

//             if (e.target.textContent == "" && winnerTrueOrFalse == false) {

//                 if (checkPlayerForClick == 1) {
//                     document.getElementById("btn-reset-this-match").style.visibility = "visible";
//                     document.getElementById("div-point-player-o").style.backgroundColor = "#f00";
//                     document.getElementById("div-point-player-x").style.backgroundColor = "#00000091";
//                     e.target.textContent = "X";
//                     e.target.style.color = "blue";
//                     checkPlayerForClick = 2;
//                     round++;

//                     if (round == 3) {
//                         if (section1.textContent == "X" && section2.textContent == "X") {
//                             if (section3.textContent == "") {
//                                 randomSection = 3;
//                             } else if (section3.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section1.textContent == "X" && section3.textContent == "X") {
//                             if (section2.textContent == "") {
//                                 randomSection = 2;
//                             } else if (section2.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section2.textContent == "X" && section3.textContent == "X") {
//                             if (section1.textContent == "") {
//                                 randomSection = 1;
//                             } else if (section1.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section1.textContent == "X" && section4.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section1.textContent == "X" && section7.textContent == "X") {
//                             if (section4.textContent == "") {
//                                 randomSection = 4;
//                             } else if (section4.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section4.textContent == "X" && section7.textContent == "X") {
//                             if (section1.textContent == "") {
//                                 randomSection = 1;
//                             } else if (section1.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section2.textContent == "X" && section5.textContent == "X") {
//                             if (section8.textContent == "") {
//                                 randomSection = 8;
//                             } else if (section8.textContent != "") {
//                                 randomSection = 7;
//                             }
//                         } else if (section5.textContent == "X" && section8.textContent == "X") {
//                             if (section2.textContent == "") {
//                                 randomSection = 2;
//                             } else if (section2.textContent != "") {
//                                 randomSection = 3;
//                             }
//                         } else if (section2.textContent == "X" && section8.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 1;
//                             }
//                         } else if (section3.textContent == "X" && section6.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section6.textContent == "X" && section9.textContent == "X") {
//                             if (section3.textContent == "") {
//                                 randomSection = 3;
//                             } else if (section3.textContent != "") {
//                                 randomSection = 1;
//                             }
//                         } else if (section3.textContent == "X" && section9.textContent == "X") {
//                             if (section6.textContent == "") {
//                                 randomSection = 6;
//                             } else if (section6.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section8.textContent == "X" && section9.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section7.textContent == "X" && section9.textContent == "X") {
//                             if (section8.textContent == "") {
//                                 randomSection = 8;
//                             } else if (section8.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section7.textContent == "X" && section8.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section4.textContent == "X" && section5.textContent == "X") {
//                             if (section6.textContent == "") {
//                                 randomSection = 6;
//                             } else if (section6.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section4.textContent == "X" && section6.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 7;
//                             }
//                         } else if (section5.textContent == "X" && section6.textContent == "X") {
//                             if (section4.textContent == "") {
//                                 randomSection = 4;
//                             } else if (section4.textContent != "") {
//                                 randomSection = 1;
//                             }
//                         } else if (section1.textContent == "X" && section5.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 3;
//                             }
//                         } else if (section1.textContent == "X" && section9.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 6;
//                             }
//                         } else if (section5.textContent == "X" && section9.textContent == "X") {
//                             if (section1.textContent == "") {
//                                 randomSection = 1;
//                             } else if (section1.textContent != "") {
//                                 randomSection = 3;
//                             }
//                         } else if (section3.textContent == "X" && section5.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section3.textContent == "X" && section7.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 6;
//                             }
//                         } else if (section5.textContent == "X" && section7.textContent == "X") {
//                             if (section3.textContent == "") {
//                                 randomSection = 3;
//                             } else if (section3.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else {
//                             randomSection = 0;
//                         }
//                     } else if (round == 5) {
//                         if (section1.textContent == "X" && section2.textContent == "X" && section4.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section1.textContent == "X" && section2.textContent == "X" && section5.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 8;
//                             }
//                         } else if (section1.textContent == "X" && section2.textContent == "X" && section6.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 7;
//                             }
//                         }
//                         ////////////////////////////////////////
//                         else if (section1.textContent == "X" && section3.textContent == "X" && section4.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         } else if (section1.textContent == "X" && section3.textContent == "X" && section5.textContent == "X") {
//                             if (section7.textContent == "") {
//                                 randomSection = 7;
//                             } else if (section7.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section1.textContent == "X" && section3.textContent == "X" && section6.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         }
//                         ////////////////////////////////////////
//                         else if (section2.textContent == "X" && section3.textContent == "X" && section4.textContent == "X") {
//                             if (section5.textContent == "") {
//                                 randomSection = 5;
//                             } else if (section5.textContent != "") {
//                                 randomSection = 9;
//                             }
//                         } else if (section2.textContent == "X" && section3.textContent == "X" && section5.textContent == "X") {
//                             if (section8.textContent == "") {
//                                 randomSection = 8;
//                             } else if (section8.textContent != "") {
//                                 randomSection = 7;
//                             }
//                         } else if (section2.textContent == "X" && section3.textContent == "X" && section6.textContent == "X") {
//                             if (section9.textContent == "") {
//                                 randomSection = 9;
//                             } else if (section9.textContent != "") {
//                                 randomSection = 5;
//                             }
//                         }
//                         ////////////////////////////////////////
//                         else if (section1.textContent == "X" && section4.textContent == "X") {
//                             randomSection = 8;
//                         } else if (section1.textContent == "X" && section7.textContent == "X") {
//                             randomSection = 4;
//                         } else if (section4.textContent == "X" && section7.textContent == "X") {
//                             randomSection = 1;
//                         } else if (section2.textContent == "X" && section5.textContent == "X") {
//                             randomSection = 8;
//                         } else if (section5.textContent == "X" && section8.textContent == "X") {
//                             randomSection = 2;
//                         } else if (section2.textContent == "X" && section8.textContent == "X") {
//                             randomSection = 5;
//                         } else if (section3.textContent == "X" && section6.textContent == "X") {
//                             randomSection = 9;
//                         } else if (section6.textContent == "X" && section9.textContent == "X") {
//                             randomSection = 3;
//                         } else if (section3.textContent == "X" && section9.textContent == "X") {
//                             randomSection = 6;
//                         } else if (section8.textContent == "X" && section9.textContent == "X") {
//                             randomSection = 7;
//                         } else if (section7.textContent == "X" && section9.textContent == "X") {
//                             randomSection = 8;
//                         } else if (section7.textContent == "X" && section8.textContent == "X") {
//                             randomSection = 9;
//                         } else if (section4.textContent == "X" && section5.textContent == "X") {
//                             randomSection = 6;
//                         } else if (section4.textContent == "X" && section6.textContent == "X") {
//                             randomSection = 5;
//                         } else if (section5.textContent == "X" && section6.textContent == "X") {
//                             randomSection = 4;
//                         }
//                     }
//                     console.log(round);
//                 }

//             }
//             if (randomSection == 0 && winnerTrueOrFalse == false) {
//                 randomSelectSectionfunc();
//             } else if (randomSection != 0 && winnerTrueOrFalse == false) {
//                 selectSectionfunc();
//             }
//         })
//     })
// }