const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getRandomChoice() {
  const choices = [rock, paper, scissors];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie";
  } else if (
    (userChoice === rock && computerChoice === scissors) ||
    (userChoice === paper && computerChoice === rock) ||
    (userChoice === scissors && computerChoice === paper)
  ) {
    return "You win!!! :)";
  } else {
    return "You lose :(";
  }
}


document.addEventListener("DOMContentLoaded", function () {
  
  alert("The first to reach 5 is the winner");

  const buttons = Array.from(document.querySelectorAll("button"));
  const resultDiv = document.getElementById("result");
  const UserResult = document.querySelector('.footer1');
  const ComputerResult = document.querySelector('.footer2');
  var User = 0;
  var Computer = 0;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const userChoice = this.id;
      const computerChoice = getRandomChoice();
      const result = determineWinner(userChoice, computerChoice);

      if (result === "You win!!! :)") {
        User++;
      } else if (result === "You lose :(") {
        Computer++;
      }

      resultDiv.innerHTML = `User's choice: ${userChoice}<br>Computer's choice: ${computerChoice}<br><br><br><strong>RESULT : ${result}</strong>`;

      // Update the score display
      UserResult.innerHTML = `<h5>User: ${User}</h5>`;
      ComputerResult.innerHTML = `<h5>Computer: ${Computer}</h5>`;
      
      if (User == 5) {
        alert("You won!!!!!!!!!!!!!!!!!!!!!!!");
        resetGame(); 
    } else if (Computer == 5) {
        alert("You lost!! :( ");
        resetGame(); 
    }
    
    function resetGame() {
        // Reload the page to start the game again
        location.reload();
    }

      
    });
  });
});
