///// Functions /////
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("Choose 'rock', 'paper', or 'scissors':");
    if (choice.toLowerCase() === 'rock' || choice.toLowerCase() === 'paper' || choice.toLowerCase() === 'scissors') {
        return choice.toLowerCase();
    } else {
        console.log('please refresh and try again!');
    }
}


// Return 0 for a draw; 1 for a human win; 2 for a computer win
function playRound(humanChoice, computerChoice) {    
    if(humanChoice === computerChoice) {
        return 0;
    } else {
        switch(humanChoice) {
            case 'rock':
                if(computerChoice === 'scissors') return 1;
                else return 2;
            case 'paper':
                if(computerChoice === 'rock') return 1;
                else return 2;
            case 'scissors':
                if(computerChoice === 'paper') return 1;
                else return 2;
        }
    }
}

function determineRoundWinner(result, humanChoice, computerChoice) {
    switch (result) {
        case 0:
            drawScore += 1;            
            return `It's a tie! Both players chose ${humanChoice}.`
        case 1:
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}.`
        case 2:
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoice}.`
    } 
}

function updateScoreText() {
    userScore.textContent = humanScore;
    cpuScore.textContent = computerScore;
    tieScore.textContent = drawScore;
}

function playGame(humanChoice) {
    let computerChoice = getComputerChoice();

    let result = playRound(humanChoice, computerChoice);
    console.log(determineRoundWinner(result, humanChoice, computerChoice));        

    updateScoreText();

    if(humanScore === 5 || computerScore === 5) console.log(`Game over! Final score:\nYou: ${humanScore}\nComputer: ${computerScore}\nDraws: ${drawScore}`);    
}

///// Execution /////
let humanScore = computerScore = drawScore = humanWin = 0;
// playGame();

const userScore = document.querySelector('.user-score');
const cpuScore = document.querySelector('.cpu-score');
const tieScore = document.querySelector('.tie-score');



const rockBtn = document.querySelector('.rock');
rockBtn.addEventListener('click', () => {
    playGame('rock');
});

const paperBtn = document.querySelector('.paper');
paperBtn.addEventListener('click', () => {      
    playGame('paper');
});

const scissorsBtn = document.querySelector('.scissors');
scissorsBtn.addEventListener('click', () => {
    playGame('scissors');
});
