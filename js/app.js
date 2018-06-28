//DOM ELEMENTS
const startScreen = document.getElementById("start");
const boardScreen = document.getElementById("board");
const finishScreen = document.getElementById("finish");
const player1ListItem = document.getElementById("player1");
const box = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");
const firstRow = [...document.querySelectorAll(".box")].splice(0,3);
const secondRow = [...document.querySelectorAll(".box")].splice(3,3);
const thirdRow = [...document.querySelectorAll(".box")].splice(6);
let firstRowDown = [];
let secondRowDown = [];
let thirdRowDown = [];
let diagonal1 = [];
let diagonal2 = [];

   for (let i = 0; i<boxes.length; i+=4) {
      diagonal1.push(boxes[i]);
    }
    for (let i = 2; i<7; i+=2) {
      diagonal2.push(boxes[i]);
    }
    for (let i = 0; i<7; i+=3) {
      firstRowDown.push(boxes[i]);
    }
    for (let i  = 1; i<8; i+= 3) {
      secondRowDown.push(boxes[i]);
    }
    for (let i  = 2; i<9; i+= 3) {
      thirdRowDown.push(boxes[i]);
    }


//hides board and finish screen
const hideHideShow = function(hideScreen,hideScreen2,showScreen) {
   hideScreen.style.display = "none";
   hideScreen2.style.display = "none";
   showScreen.style.display = "block";

 }
//hides on window load and displays start screen
hideHideShow(boardScreen,finishScreen,startScreen);

//Starts game
start.addEventListener("click", event => {
      event.target.textContent === "Start game" ? hideHideShow(finishScreen,startScreen,boardScreen):null;
      player1.isTurn ? player1ListItem.className = "players active" : null;
});

//PLAYER TEMPLATE
class Player  {
  constructor(name,isTurn,playerLi) {
    this.name = name,
    this.isTurn = isTurn,
    this.playerLi = playerLi
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

class Board {
  constructor(status,boxCount,topRow) {
  this.status = status,
  this.boxCount = boxCount


 }

  get isGameFinished() {
      if(this.status === "player1") {

       hideHideShow(boardScreen,startScreen,finishScreen);
       finishScreen.className = "screen screen-win screen-win-one";
       let message = document.querySelector(".message");
       message.textContent = "Player 1 WINS"
       this.status = "start";
       this.boxCount = 0;


     } else if (this.status === "player2") {

       hideHideShow(boardScreen,startScreen,finishScreen);
       finishScreen.className = "screen screen-win screen-win-two";
       let message = document.querySelector(".message");
       message.textContent = "Player 2 WINS"
       this.status = "start";
       this.boxCount = 0;

     }
      else if (this.boxCount === 9 && this.status === "start") {

           hideHideShow(boardScreen,startScreen,finishScreen);
          finishScreen.className = "screen screen-win screen-win-tie";
          let message = document.querySelector(".message");
          message.textContent = "TIE";
          this.status = "start";
          this.boxCount = 0;

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

          if (rowOne.length === 3 || rowTwo.length === 3 || rowThree.length === 3 || dia1.length ===3 || dia2.length === 3 || firstRowD.length === 3 || secondRowD.length === 3 || thirdRowD.length === 3) {
            this.status = "player2";
              }
              let thirdRowDownCirlce = thirdRowDown.filter(box => box.className === "box box-filled-2");
              let secondRowDownCircle = secondRowDown.filter(box => box.className === "box box-filled-1");
              let firstRowDCircle = firstRowDown.filter(box => box.className === "box box-filled-1");
              let rowOneCircle = firstRow.filter(box => box.className === "box box-filled-1");
              let rowTwoCircle = secondRow.filter(box => box.className === "box box-filled-1");
              let rowThreeCircle = thirdRow.filter(box => box.className === "box box-filled-1");
              let dia1Circle = diagonal1.filter(box => box.className === "box box-filled-1");
              let dia2Circle = diagonal2.filter(box => box.className === "box box-filled-1");

             if (rowOneCircle.length === 3 || rowTwoCircle.length === 3 || rowThreeCircle.length === 3 || dia1Circle.length === 3 || dia2Circle.length === 3 || firstRowDCircle.length === 3||
                 secondRowDownCircle.length === "box box-filled-1" || thirdRowDownCirlce.length === 3) {
              this.status = "player1";
          }
       }

   }

const player1 = new Player("Player1", true, "player1" );
const player2 = new Player("Player 2", false, "player2");
const gameBoard = new Board("start", 0);

finishScreen.addEventListener("click", event => {

   if (event.target.textContent === "New game") {
      boxes.forEach(box => {
        box.classList.remove("box-filled-2");
        box.classList.remove("box-filled-1");
  });
      finishScreen.className = "screen screen-win";
      hideHideShow(finishScreen,startScreen,boardScreen);

   }

});

box.addEventListener("mouseover", (event)=> {

 if (event.target.className === "box box-filled-1" || event.target.className === "box box-filled-2" ) {
    player1.isTurn ? event.target.style.backgroundImage = "" : null;
    player2.isTurn ? event.target.style.backgroundImage = "" : null;
 }
   else {
         player1.isTurn ? event.target.style.backgroundImage = "url('img/o.svg')" : null;
         player2.isTurn ? event.target.style.backgroundImage = "url('img/x.svg')" : null;
       }
})

//Could add via CSS:hover but not touching CSS/HTML
box.addEventListener("mouseout", (event) => {

     player1.isTurn ? event.target.style.backgroundImage = "" : null;
     player2.isTurn ? event.target.style.backgroundImage = "" : null;
});

box.addEventListener("click", (event) => {

      if(player1.isTurn === true  && event.target.className !== "box box-filled-1" && event.target.className !== "box box-filled-2" ) {
         event.target.classList.add("box-filled-1");
         player1.turn = false;
         player2.turn = true;
         gameBoard.boxCount += 1;
         player1.setActive();
          player2.setActive();
        }

        else if (player2.isTurn === true && event.target.className !== "box box-filled-2" && event.target.className !== "box box-filled-1") {
          event.target.classList.add("box-filled-2");
          player2.turn = false;
          player1.turn = true;
          gameBoard.boxCount += 1;
          player1.setActive();
          player2.setActive();
    }
      ;
        gameBoard.boardStatus;
        gameBoard.isGameFinished;

});
