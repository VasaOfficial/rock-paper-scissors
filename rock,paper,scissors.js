let options = ["rock", "paper", "scissors"];

let playerScore = 0
let computerScore = 0

const rock = document.getElementById("rock")
const paper = document.getElementById("paper")
const scissors = document.getElementById("scissors")
const outcome = document.getElementById("outcome")

function getComputerChoice() {
  let  choice = options[Math.floor(Math.random() * options.length)];
  return choice;
}

function getResult(player, computer) {
  if (player == computer) {
    return "Tie";
  }
  else if (
    (player == "rock" && computer == "scissors") ||
    (player == "paper" && computer == "rock") ||
    (player == "scissors" && computer == "paper")) {
      return "Player";
    }
  else {
    return "Computer";
}
}

function playRound(player, computer) {
  let result = getResult(player, computer);
  if (result == "Tie") {
    const p = document.createElement("p")
    outcome.appendChild(p)
    p.textContent = "Its a Tie"
  }
  else if (result == "Player" ) {
    playerScore++
    const p = document.createElement("p")
    outcome.appendChild(p)
    p.textContent = "You won";
  }
  else {
    computerScore++
    const p = document.createElement("p")
    outcome.appendChild(p)
    p.textContent = "You lost";
  }
}

const checkForWinner = (playerScore, computerScore) => {
  if (playerScore === 5) {
    const h2 = document.createElement("h2")
    h2.classList.add("playerWon")
    h2.innerText = "Congratulation You Won The Game!"
    outcome.appendChild(h2)
  }
  else if (computerScore === 5) {
    const h2 = document.createElement("h2")
    h2.classList.add("computerWon")
    h2.innerText = "Unfortunatly You Lost The Game"
    outcome.appendChild(h2)
  }
}

rock.addEventListener("click", () => {
  let computer = getComputerChoice()
  let player = "rock"
  playRound(player, computer)
  checkForWinner(playerScore, computerScore)
});

paper.addEventListener("click", () => {
  let computer = getComputerChoice()
  let player = "paper"
  playRound(player, computer)
  checkForWinner(playerScore, computerScore)
});

scissors.addEventListener("click", () => {
  let computer = getComputerChoice()
  let player = "scissors"
  playRound(player, computer)
  checkForWinner(playerScore, computerScore)
});





