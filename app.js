const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    //Start Game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Match
    const playMatch = () => {
        const options = document.querySelector(".options buttion");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelector('.hands img');

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });
        //Comp options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //Comp Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                //Compare Hands
               

                setTimeout(() =>{
                    compareHands(this.textContent, computerChoice);
                    //Img update
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {

        const winner = document.querySelector(".winner");
        if (playerChoice === computerChoice) {
            winner.textContent = "Wow you tied!";
            return;
        }

        //Rocks
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins!"
                pScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore++;
                updateScore();
                return;
            }
        }
        //Paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins!"
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }
        }
        //Scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer wins!"
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins!";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //Call all inner functions
    startGame();
    playMatch();
};


//Start Game Function
game();