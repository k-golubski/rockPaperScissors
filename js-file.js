// get an int between 1-3 and assign it to r,p,s for computer's random choice
function getComputerChoice() {
    compChoice = '';
    // Get a random number of 1,2, or 3 and assign it rock, paper, or scissors
    num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) {
        compChoice = 'rock';
    }
    else if (num === 2) {
        compChoice = 'paper';
    }
    else {
        compChoice = 'scissors';
    }
    return compChoice;
}


function playerClick() {
    //select buttons from doc
    const buttons = document.querySelectorAll('button');
    //loop through buttons adding a click eventlistener
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //set player choice for button clicked and play a round with that player choice
            playerChoice = button.id;
            displayResult(playRound(playerChoice, getComputerChoice()));
            displayScore(playerScore, compScore);
        })
    });
}


function displayResult(result) {
    const div = document.getElementById('results');
    if (div.childNodes.length == 2) {
        const content = document.createElement('p');
        content.setAttribute('id', 'pResult');
        content.textContent = result;
        div.appendChild(content);        
    } else {
        const text = document.getElementById('pResult');
        text.textContent = result;
    }

}

function displayChoices(pChoice, cChoice) {
    const div = document.getElementById('results');
    if (div.childNodes.length == 1) {
        const content = document.createElement('p');
        content.setAttribute('id', 'pChoices');
        content.textContent = `Player choice: ${pChoice} Computer Choice: ${cChoice}`;
        div.appendChild(content);
    }
    else {
        const text = document.getElementById('pChoices');
        text.textContent = `Player choice: ${pChoice} Computer Choice: ${cChoice}`;
    }
}

function displayScore(playerScore, compScore) {
    const div = document.getElementById('results');
    if (div.childNodes.length == 3) {
        const content = document.createElement('p');
        content.setAttribute('id', 'score');
        content.textContent = `Player score: ${playerScore} Computer score: ${compScore}`;
        div.appendChild(content);
    }
    else {
        const text = document.getElementById('score');
        text.textContent = `Player score: ${playerScore} Computer score: ${compScore}`;
    }
}

function playRound(playerChoice, compChoice) {
    if (playerChoice === compChoice) {
        displayChoices(playerChoice, compChoice);
        return "It's a tie!";
    }
    else if (playerChoice === 'rock' && compChoice === 'scissors') {
        playerScore += 1;
        displayChoices(playerChoice, compChoice);
        return "YOU WIN!";
    }
    else if (playerChoice === 'rock' && compChoice === 'paper') {
        compScore += 1;
        displayChoices(playerChoice, compChoice);;
        return "Computer wins this round";
    }
    else if (playerChoice === 'paper' && compChoice === 'scissors') {
        compScore += 1;
        displayChoices(playerChoice, compChoice);
        return "Computer wins this round";
    }
    else if (playerChoice === 'paper' && compChoice === 'rock') {
        playerScore += 1;
        displayChoices(playerChoice, compChoice);
        return "YOU WIN!";
    }
    else if (playerChoice === 'scissors' && compChoice === 'paper') {
        playerScore += 1;
        displayChoices(playerChoice, compChoice);
        return "YOU WIN!";
    }
    else if (playerChoice === 'scissors' && compChoice === 'rock') {
        compScore += 1;
        displayChoices(playerChoice, compChoice);
        return "Computer won this round";
    }        
}
//reslts in infinite loop
// function checkWinner(compScore, playerScore) {
//     if (compScore === 5 && playerScore === 5) {
//         winner = true;
//     }
//     else if (compScore === 5 || playerScore === 5) {
//         winner = true;
//     }
//     else winner = false;
// }


// start both scores at 0 before game is played
let compScore = 0;
let playerScore = 0;
let winner = false;


function game() {
    playerClick();
    // while (winner === false) {
    //     playerClick();
    //     console.log(`Player score: ${playerScore} Computer score: ${compScore}`);
    // }
    //console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
    
}

game();