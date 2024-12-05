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