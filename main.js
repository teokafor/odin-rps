///// Functions /////
function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    console.log(`Computer chose ${choice}`);

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



///// Execution /////
let humanScore, computerScore, drawScore, humanWin = 0;

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

let result = playRound(humanChoice, computerChoice);

console.log(result);