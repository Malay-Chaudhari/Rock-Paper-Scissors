const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay = document.querySelector('#user-choice');
const resultDisplay = document.querySelector('#result');
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    // User's choice
    userChoice = e.target.value;
    userChoiceDisplay.innerHTML = userChoice;

    // Computer's choice
    generateComputerChoice();

    // Show Result
    getResult();
}))

// Computer's choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1; // or * possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }

    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }

    computerChoiceDisplay.innerHTML = computerChoice;
}

// Show Result
function getResult() {
    if (computerChoice === userChoice) {
        result = '🎌Draw!🎌';
    }

    if ((computerChoice === 'Rock' && userChoice === 'Paper') || (computerChoice === 'Paper' && userChoice === 'Scissors') || (computerChoice === 'Scissors' && userChoice === 'Rock')) {
        result = '🚩You Win!🚩';
    }

    if ((computerChoice === 'Paper' && userChoice === 'Rock') || (computerChoice === 'Scissors' && userChoice === 'Paper') || (computerChoice === 'Rock' && userChoice === 'Scissors')) {
        result = '🏳️You Lost!🏳️';
    }

    resultDisplay.innerHTML = result;
}