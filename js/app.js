//DOM ELEMENTS
const startScreen = document.getElementById("start");
const boardScreen = document.getElementById("board");
const finishScreen = document.getElementById("finish");
const player1ListItem = document.getElementById("player1");
const box = document.querySelector(".boxes");
const boxes = document.querySelectorAll(".box");

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
// BOARD
class Board {
  constructor(status,boxCount,topRowWin,middleRowWin,lowerRowWin) {
  this.status = status,
  this.boxCount = boxCount,
  this.topRowWin = topRowWin,
  this.middleRowWin = middleRowWin,
  this.lowerRowWin = lowerRowWin;
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

  get stat() {
     const getBoxes = [...document.querySelectorAll(".box")];

       if (getBoxes[0].className === "box box-filled-1" && getBoxes[1].className === "box box-filled-1" & getBoxes[2].className === "box box-filled-1") {
              this.status = "player1";

       }else if (getBoxes[0].className === "box box-filled-1" && getBoxes[3].className === "box box-filled-1" & getBoxes[6].className === "box box-filled-1") {
              this.status = "player1";
       } else if (getBoxes[0].className === "box box-filled-1" && getBoxes[4].className === "box box-filled-1" & getBoxes[8].className === "box box-filled-1") {
              this.status = "player1";
       }
       else if (getBoxes[1].className === "box box-filled-1" && getBoxes[4].className === "box box-filled-1" & getBoxes[7].className === "box box-filled-1") {
              this.status = "player1";
       } else if (getBoxes[2].className === "box box-filled-1" && getBoxes[4].className === "box box-filled-1" & getBoxes[6].className === "box box-filled-1") {
              this.status = "player1";
       } else if (getBoxes[3].className === "box box-filled-1" && getBoxes[4].className === "box box-filled-1" & getBoxes[5].className === "box box-filled-1") {
              this.status = "player1";
       } else if (getBoxes[6].className === "box box-filled-1" && getBoxes[7].className === "box box-filled-1" & getBoxes[8].className === "box box-filled-1") {
              this.status = "player1";
       }
         else if (getBoxes[0].className === "box box-filled-2" && getBoxes[1].className === "box box-filled-2" & getBoxes[2].className === "box box-filled-2") {
         this.status = "player2";
       }else if (getBoxes[0].className === "box box-filled-2" && getBoxes[3].className === "box box-filled-2" & getBoxes[6].className === "box box-filled-2") {
        this.status = "player2";
       } else if (getBoxes[0].className === "box box-filled-2" && getBoxes[4].className === "box box-filled-2" & getBoxes[8].className === "box box-filled-2") {
         this.status = "player2";
       }
       else if (getBoxes[1].className === "box box-filled-2" && getBoxes[4].className === "box box-filled-2" & getBoxes[7].className === "box box-filled-2") {
         this.status = "player2";
       } else if (getBoxes[2].className === "box box-filled-2" && getBoxes[4].className === "box box-filled-2" & getBoxes[6].className === "box box-filled-2") {
          this.status = "player2";
       } else if (getBoxes[3].className === "box box-filled-2" && getBoxes[4].className === "box box-filled-2" & getBoxes[5].className === "box box-filled-2") {
          this.status = "player2";
       } else if (getBoxes[6].className === "box box-filled-2" && getBoxes[7].className === "box box-filled-2" & getBoxes[8].className === "box box-filled-2") {
         this.status = "player2";
       }
}
      set counter(boxCount) {
        this.boxCount += boxCount;
}

}

const player1 = new Player("Player1", true, "player1" );
const player2 = new Player("Player 2", false, "player2");
const gameBoard = new Board("start", 0);

finishScreen.addEventListener("click", event => {

   if (event.target.textContent === "New game") {
     let resetBoard = [...boxes];
      resetBoard.forEach(box => {
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

      if(player1.isTurn === true
        && event.target.className !== "box box-filled-1"
        && event.target.className !== "box box-filled-2" )
        {
        event.target.classList.add("box-filled-1");
         player1.turn = false;
         player2.turn = true;
         gameBoard.boxCount += 1;
         player1.setActive();
          player2.setActive();
        }

        else if (player2.isTurn === true
          && event.target.className !== "box box-filled-2"
          && event.target.className !== "box box-filled-1")
          {
          event.target.classList.add("box-filled-2");
          player2.turn = false;
          player1.turn = true;
          gameBoard.boxCount += 1;
          player1.setActive();
          player2.setActive();
    }
         console.log(gameBoard.boxCount);
        gameBoard.stat;
        gameBoard.isGameFinished;

});
