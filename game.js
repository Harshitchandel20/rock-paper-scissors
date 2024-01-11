// Declaring variables--------------------------------
var player = document.getElementById("image-1");
var computer = document.getElementById("image-2");
var rockBtn = document.getElementById("player-rock");
var paperBtn = document.getElementById("player-paper");
var scissorsBtn = document.getElementById("player-scissors");

var rockSrc = "./assets/rock-hand.png";
var paperSrc = "./assets/paper-hand.png";
var scissorsSrc = "./assets/scissors-hand.png";

var randomNum;
var playerScore = 0;
var compScore = 0;

let choiceArray = [];
function randomMove() {
    choiceArray = [rockSrc, paperSrc, scissorsSrc];
    randomNum = Math.floor(Math.random() * 3);
    computer.src = choiceArray[randomNum];
}


var scorePlayer = document.getElementById("score-player");
var scoreComputer = document.getElementById("score-computer");
scorePlayer.textContent = playerScore;
scoreComputer.textContent = compScore;

var gameOverDiv = document.getElementById("game-over");
var gameOverMessage = document.getElementById("game-over-message");
var playAgainBtn = document.getElementById("play-again-button");

function updateScore() {
    const playerChoice = player.getAttribute("src");
    const computerChoice = computer.getAttribute("src");
    if (playerChoice == rockSrc && computerChoice == scissorsSrc) {
        playerScore++;
    } else if (playerChoice == rockSrc && computerChoice == paperSrc) {
        compScore++;
    } else if (playerChoice == paperSrc && computerChoice == scissorsSrc) {
        compScore++;
    } else if (playerChoice == paperSrc && computerChoice == rockSrc) {
        playerScore++;
    } else if (playerChoice == scissorsSrc && computerChoice == rockSrc) {
        compScore++;
    } else if (playerChoice == scissorsSrc && computerChoice == paperSrc) {
        playerScore++;
    }

    scorePlayer.textContent = playerScore;
    scorePlayer.textContent = compScore;

    if (playerScore == 5 || compScore == 5) {
        rockBtn.style.display = "none";
        paperBtn.style.display = "none";
        scissorsBtn.style.display = "none";

        gameOverDiv.style.display = "block";
        if (playerScore == 5) {
            gameOverMessage.textContent = "You Won the Game!";
        } else if (compScore == 5) {
            gameOverMessage.textContent = "Computer Won the Game.";
        }

        playAgainBtn.onclick = () => {
            location.href = "./game.html";
        };
    }
}


rockBtn.onclick = () => {
    player.src = rockSrc;
    randomMove();
    updateScore();
};

paperBtn.onclick = () => {
    player.src = paperSrc;
    randomMove();
    updateScore();
};

scissorsBtn.onclick = () => {
    player.src = scissorsSrc;
    randomMove();
    updateScore();
};