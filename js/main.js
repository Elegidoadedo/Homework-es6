//function to create screen with code as argument
function buildScreen(code){ 
  const div= document.createElement('div');
  div.innerHTML= code;
  return div.children[0];
}

function main(){
   const canvas = document.querySelector('.main');
   let startScreen = null;
   let gameOverScreen = null;
   let btnStart = null;
   let btnRestart = null;
   let score = null;

//DESTROY FUNCTIONS

   function destroySplash(){
   
//PREGUNTAR POR QUE HAY QUE QUITAR EL EVENT SI NO HAY BOTÓN ****
  btnStart.removeEventListener('click',clickStart);
  startScreen.remove();
};

function destroyGameOver(){
  btnRestart.removeEventListener('click', clickRestart)
  gameOverScreen.remove();
}

function destroyGame() {
  game.destroy();
}
//CREATE THINGS FUNCTIONS
let game = null;

function buildGame(){
  game = new Game(canvas);

  game.onOver(handleGameover);
  }

//destruye splash y crea game screen

function clickStart(){
  destroySplash();
  buildGame();
}

function clickRestart(){
  destroyGameOver();
  buildGame();
}

function handleGameover () {
  destroyGame();
  buildGameOver();
}
//buildSplash wil creates the splash screen

   function buildSplash(){
     startScreen = buildScreen(
      `<div class="back-splash">
        <img src="img/slash.png" class=" img-slash" alt="dyno power parking">
        <button class="btn-start">Start Game</button>
       </div>`
       );
        canvas.appendChild(startScreen);
        btnStart = document.querySelector(".btn-start");
        btnStart.addEventListener('click', clickStart )

   };
//buildGaneOver will creates Game Over Screen
   function buildGameOver(){
     gameOverScreen= buildScreen(
       `<div class="back-gameOver">
       <h1>Game Over!</h1>
       <h2>Your Score is </h2>
       <span class="value"></span>
       <button class="btn-restart">Restart Game</button>
       </div>`
       );
       canvas.appendChild(gameOverScreen);
       const scoreElement = document.querySelector('.value');
       scoreElement.innerText = game.score;
       btnRestart = document.querySelector(".btn-restart");
       btnRestart.addEventListener('click', clickRestart);
   };
//
buildSplash();


}

window.addEventListener('load', main);