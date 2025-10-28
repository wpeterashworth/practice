function determinePlayerChoice() {
    // if the rock button is chosen as the player's option, remove anything in the array and add "Rock" to the choices array
    let rockButton = document.querySelector('.rock')
    rockButton.addEventListener('click', function() {
        determineComputerChoice("Rock")
    })

    // if the paper button is chosen as the player's option, remove anything in the array and add "Paper" to the choices array
    let paperButton = document.querySelector('.paper')
    paperButton.addEventListener('click', function()  {
        determineComputerChoice("Paper")
    })

    // if the scissors button is chosen as the player's option, remove anything in the array and add "Scissors" to the choices array
    let scissorsButton = document.querySelector('.scissors')
    scissorsButton.addEventListener('click', function()  {
        determineComputerChoice("Scissors")
    })
}

function determineComputerChoice(playerChoice) {
    // create a random number and assign it to a variable called randomNumber
    const randomNumber = Math.random()

    // create a choice for the computer based on the random number it generates
     if (randomNumber >= 0 && randomNumber < 1/3) {
        let computerChoice = "Rock"
        decideGame(playerChoice, computerChoice)
    } 
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {
        let computerChoice = "Paper"
        decideGame(playerChoice, computerChoice)
    }
    else if (randomNumber >= 2/3) {
        let computerChoice = "Scissors"
        decideGame(playerChoice, computerChoice)
    }
    
} 

function decideGame(playerChoice, computerChoice) {
    if (computerChoice === "Rock" && playerChoice === "Rock" || computerChoice === "Paper" && playerChoice === "Paper" || computerChoice === "Scissors" && playerChoice === "Scissors") {
    // create an element on the page using the DOM for the scenario where the game is a tie and add an id to the element
    const tie = document.createElement('p')
    document.body.appendChild(tie)
    tie.id = 'gameOutcomeParagraph'
    tie.innerHTML = "Tie!"
    }
    else if (computerChoice === "Rock" && playerChoice === "Scissors" || computerChoice === "Scissors" && playerChoice === "Paper" || computerChoice === "Paper" && playerChoice === "Rock") {
    // create an element on the page using the DOM for the scenario where the game is a loss and add an id to the element
    const loss = document.createElement('p')
    document.body.appendChild(loss)
    loss.id = 'gameOutcomeParagraph'
    loss.innerHTML = `Sorry, but you lost! The computer chose ${computerChoice}`
    }
    else if (computerChoice === "Rock" && playerChoice === "Paper" || computerChoice === "Scissors" && playerChoice === "Rock" || computerChoice === "Paper" && playerChoice === "Scissors") {
    // create an element on the page using the DOM for the scenario where the game is a win and add an id to the element
    const win = document.createElement('p')
    document.body.appendChild(win)
    win.id = 'gameOutcomeParagraph'
    win.innerHTML = `You won! The computer chose ${computerChoice}`
    }
}

// Clear the new paragraph elements on the page 
function clearElements() {
    let clearButton = document.querySelector(".clear-button")
    clearButton.addEventListener('click', function() {
        let elements = document.querySelectorAll("#gameOutcomeParagraph")
        elements.forEach(element => {
            element.remove()
        })
    })
}

function init() {
    determinePlayerChoice()
    clearElements()
}

init()
