

// DOM Reference
! function() {
    const inputName = document.querySelector("#start header");
    const startScreen = document.getElementById("start");
    const boardScreen = document.getElementById("board");
    const finishScreen = document.getElementById("finish");
    const player1ListItem = document.getElementById("player1");
    const box = document.querySelector(".boxes");
    const boxes = document.querySelectorAll(".box");
    const firstRow = [...document.querySelectorAll(".box")].splice(0, 3);
    const secondRow = [...document.querySelectorAll(".box")].splice(3, 3);
    const thirdRow = [...document.querySelectorAll(".box")].splice(6);



    let firstRowDown = [],
        secondRowDown = [],
        thirdRowDown = [],
        diagonal1 = [],
        diagonal2 = [];
function createTicTacToeBoxes(start = 0, length, plusPlusBy, row ) {
  for (let i = start; i < length; i += plusPlusBy) {
      row.push(boxes[i]);
  }
}

createTicTacToeBoxes(0, boxes.length, 4, diagonal1);
createTicTacToeBoxes(2, 7, 2, diagonal2);
createTicTacToeBoxes(0, 7, 3, firstRowDown);
createTicTacToeBoxes(1, 8, 3, secondRowDown);
createTicTacToeBoxes(2, 9, 3,thirdRowDown);

// hides board and finish screen
    const hideHideShow = function(hideScreen, hideScreen2, showScreen) {
        hideScreen.style.display = "none";
        hideScreen2.style.display = "none";
        showScreen.style.display = "block";

        if (showScreen.className === "screen screen-start") {
            let input = document.createElement("input");
            input.placeholder = "Enter name";
            inputName.appendChild(input);
        }
    }


  // guesses computer move based on remaining boxes
    const computerMove = function(availBox) {
        let randomNumber = (availBox) => Math.floor(Math.random() * availBox.length);
        let rand = randomNumber(availBox);
        availBox[rand].className = "box box-filled-2";
        player2.turn = false;
        player1.turn = true;
        player1.setActive();
        player2.setActive();
        gameBoard.boxCount += 1;

        gameBoard.boardStatus;
        gameBoard.isGameFinished;


    }


    //function sets winning text
    const finishContent = function(playerClassName, domElement, winningPhrase) {
        finishScreen.className = playerClassName;
        let message = document.querySelector(domElement);
        let winning = `${winningPhrase} is the winner`;
        message.textContent = winning;
    }

    // hides on window load and displays start screen
    hideHideShow(boardScreen, finishScreen, startScreen);


    //Starts game
    start.addEventListener("click", event => {
        const inputInfo = document.querySelector("#start input");
        const boardHeader = document.querySelector(".boxes");
        let inputValue = inputInfo.value;
        inputValue = inputValue.trim();
        if (inputValue.length === 0) {
            event.preventDefault();
        } else {
            event.target.textContent === "Start game" ? hideHideShow(finishScreen, startScreen, boardScreen) : null;
            player1.isTurn ? player1ListItem.className = "players active" : null;

            let player1Name = document.createElement("p");
            player1Name.setAttribute("class", "p2")
            player1Name.textContent = inputInfo.value;
            boardScreen.insertBefore(player1Name, boardHeader);

            let player2Name = document.createElement("p");
            player2Name.setAttribute("class", "p1")
            player2Name.textContent = "Computer";
            boardScreen.insertBefore(player2Name, boardHeader);
        }

    });




    // Basic Player Template
    class Player {
        constructor(name, isTurn, playerLi, playerClass, playerPhrase) {
            this.name = name,
                this.isTurn = isTurn,
                this.playerLi = playerLi,
                this.playerClass = playerClass,
                this.playerPhrase = playerPhrase
        }
        setActive() {
            if (this.isTurn) {
                const player = document.getElementById(this.playerLi);
                player.classList.add("active");

            } else {
                const player = document.getElementById(this.playerLi);
                player.classList.remove("active");

            }
        }
        set turn(isTurn) {
            this.isTurn = isTurn;
        }
    }


    //Board Template
    class Board {
        constructor(status, boxCount, className, message) {
            this.status = status,
                this.boxCount = boxCount,
                this.className = className,
                this.message = message


        }
        get isGameFinished() {
            if (this.status === "player1") {

                hideHideShow(boardScreen, startScreen, finishScreen);
                finishContent(player1.playerClass, ".message", document.querySelector("#board p").textContent);
                this.status = "start";
                this.boxCount = 0;
                player1.turn = true;
                player2.turn = false;


            } else if (this.status === "player2") {

              window.setTimeout(function() {hideHideShow(boardScreen, startScreen, finishScreen)},1500);
                finishContent(player2.playerClass, ".message", "Computer");
                this.status = "start";
                this.boxCount = 0;
                player1.turn = true;
                player2.turn = false;
            } else if (this.boxCount === 9 && this.status === "start") {
                hideHideShow(boardScreen, startScreen, finishScreen);
                finishContent(this.className, ".message", this.message);
                this.status = "start";
                this.boxCount = 0;
                player1.turn = true;
                player2.turn = false;
            }

        }
        set counter(boxCount) {
            this.boxCount += boxCount;
        }
        get boardStatus() {
            let thirdRowD = thirdRowDown.filter(box => box.className === "box box-filled-2");
            let secondRowD = secondRowDown.filter(box => box.className === "box box-filled-2");
            let rowOne = firstRow.filter(box => box.className === "box box-filled-2");
            let rowTwo = secondRow.filter(box => box.className === "box box-filled-2");
            let rowThree = thirdRow.filter(box => box.className === "box box-filled-2");
            let dia1 = diagonal1.filter(box => box.className === "box box-filled-2");
            let dia2 = diagonal2.filter(box => box.className === "box box-filled-2");
            let firstRowD = firstRowDown.filter(box => box.className === "box box-filled-2");

            if (rowOne.length === 3 || rowTwo.length === 3 || rowThree.length === 3 || dia1.length === 3 || dia2.length === 3 || firstRowD.length === 3 || secondRowD.length === 3 || thirdRowD.length === 3) {
                this.status = "player2";
            }
            let thirdRowDownCirlce = thirdRowDown.filter(box => box.className === "box box-filled-1");
            let secondRowDownCircle = secondRowDown.filter(box => box.className === "box box-filled-1");
            let firstRowDCircle = firstRowDown.filter(box => box.className === "box box-filled-1");
            let rowOneCircle = firstRow.filter(box => box.className === "box box-filled-1");
            let rowTwoCircle = secondRow.filter(box => box.className === "box box-filled-1");
            let rowThreeCircle = thirdRow.filter(box => box.className === "box box-filled-1");
            let dia1Circle = diagonal1.filter(box => box.className === "box box-filled-1");
            let dia2Circle = diagonal2.filter(box => box.className === "box box-filled-1");

            if (rowOneCircle.length === 3 || rowTwoCircle.length === 3 || rowThreeCircle.length === 3 || dia1Circle.length === 3 || dia2Circle.length === 3 || firstRowDCircle.length === 3 ||
                secondRowDownCircle.length === 3 || thirdRowDownCirlce.length === 3) {
                this.status = "player1";
            }
        }

    }

    const player1 = new Player("Player1", true, "player1", "screen screen-win screen-win-one", "Player 1 WINS");
    const player2 = new Player("Player 2", false, "player2", "screen screen-win screen-win-two", "Player 2 WINS");
    const gameBoard = new Board("start", 0, "screen screen-win screen-win-tie", "TIE");



    //Finished Button
    finishScreen.addEventListener("click", event => {

        if (event.target.textContent === "New game") {
            boxes.forEach(box => {
                box.classList.remove("box-filled-2");
                box.classList.remove("box-filled-1");
            });
            finishScreen.className = "screen screen-win";
            hideHideShow(finishScreen, startScreen, boardScreen);
        }

    });

    box.addEventListener("mouseover", (event) => {

        if (event.target.className !== "box box-filled-1" && event.target.className !== "box box-filled-2") {
            player1.isTurn ? event.target.style.backgroundImage = "url('img/o.svg')" : null;

        }

    });

    //Removes and add symbols when hovering
    box.addEventListener("mouseout", (event) => {

        player1.isTurn ? event.target.style.backgroundImage = "" : null;
        player2.isTurn ? event.target.style.backgroundImage = "" : null;
    });

    //  Event adds symbols to board
    box.addEventListener("mouseup", (event) => {
        let availableBoxes;

        if (player1.isTurn === true && event.target.className !== "box box-filled-1" && event.target.className !== "box box-filled-2") {          event.target.classList.add("box-filled-1");
            player1.turn = false;
            player2.turn = true;
            gameBoard.boxCount += 1;
            player1.setActive();
            player2.setActive();
            let boxs = [...boxes];
            availableBoxes = boxs.filter(box => box.className !== "box box-filled-1" && box.className !== "box box-filled-2");

            gameBoard.boardStatus;
            gameBoard.isGameFinished;

        }
        if (player2.isTurn === true) {
            document.body.requestPointerLock();
            window.setTimeout(function() {
            computerMove(availableBoxes);
            }, 2000);

            window.setTimeout(function() {
                document.exitPointerLock();
            }, 2000);
        }


    });
}();
