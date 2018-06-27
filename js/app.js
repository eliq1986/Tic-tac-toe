
//DOM ELEMENTS
const startScreen = document.getElementById("start");
const boardScreen = document.getElementById("board");
const finishScreen = document.getElementById("finish");
const player1ListItem = document.getElementById("player1");
const box = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");




//hides board and finish screen
const hideHideShow = function(hideScreen,hideScreen2,displayScreen) {
   hideScreen.style.display = "none";
   hideScreen2.style.display = "none";
   displayScreen.style.display = "block";
 }

//hides on window load and displays start screen
window.onload = hideHideShow(boardScreen,finishScreen,startScreen);


//Starts game
start.addEventListener("click", event => {
   hideHideShow(finishScreen,startScreen,boardScreen);
   player1.isTurn ? player1ListItem.className = "players active" : null
});

//Player template
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


// BOARD
class Board {
  constructor(status) {
  this.status = status
 }
  get stat() {
     const getBoxes = [...document.querySelectorAll(".box")];
     const winnerO = getBoxes.filter(box => box.className === "box box-filled-1");
     const winnerX = getBoxes.filter(box => box.className === "box box-filled-2");


}

}


const player1 = new Player("Player1", true, "player1" );
const player2 = new Player("Player 2", false, "player2");
const gameBoard = new Board("start");

box.addEventListener("mouseover", (event)=> {

 if (event.target.className === "box box-filled-1" || event.target.className === "box box-filled-2" ) {
    player1.isTurn ? event.target.style.backgroundImage = "" : null
    player2.isTurn ? event.target.style.backgroundImage = "" : null;
 }
   else {
         player1.isTurn ? event.target.style.backgroundImage = "url('img/o.svg')" : null
         player2.isTurn ? event.target.style.backgroundImage = "url('img/x.svg')" : null;
       }


})
//Could add via CSS:hover but not touching CSS/HTML
box.addEventListener("mouseout", (event) => {

     player1.isTurn ? event.target.style.backgroundImage = "" : null;
     player2.isTurn ? event.target.style.backgroundImage = "" : null;



});

box.addEventListener("click", (event) => {

      if(player1.isTurn === true
        && event.target.className !== "box box-filled-1"
        && event.target.className !== "box box-filled-2" ) {

         event.target.classList.add("box-filled-1");
         player2.turn = true;
         player1.turn = false;
         player1.setActive();
          player2.setActive();

      }
        else if (player2.isTurn === true
          && event.target.className !== "box box-filled-2"
          && event.target.className !== "box box-filled-1") {

          event.target.classList.add("box-filled-2");
          player2.turn = false;
          player1.turn = true;
          player1.setActive();
          player2.setActive();

        }
        gameBoard.stat;
});
