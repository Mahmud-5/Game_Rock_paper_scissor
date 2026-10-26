let userScore = 0;
let comScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let commsg = document.querySelector("#com_msg");
const userScoreP = document.querySelector("#user-score");
const comScoreP = document.querySelector("#com-score");

const drawGame = () => {
  msg.innerText = "Opps🙂, Game was draw";
  msg.style.backgroundColor = "black";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    userScoreP.innerText = userScore;
    msg.innerText = "yupiiiiii,You win🎉";
    msg.style.backgroundColor = "green";
  } else {
    comScore++;
    comScoreP.innerText = comScore;
    msg.innerText = "You lose, better luck next time 🤗";
    msg.style.backgroundColor = "red";
  }
};

// Main game
const playGame = (userChoice) => {
  console.log(`User was selected ${userChoice}`);
  //computer choice
  const comChoice = genComChoice();
  console.log(`Computer was selected ${comChoice}`);
  commsg.innerText = `Computer was selected ${comChoice}`;

  // Game rule
  if (userChoice === comChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //com = paper , scissor
      userWin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // com = rock , scissor
      userWin = comChoice === "scissor" ? false : true;
    } else {
      // user scissor
      //com rock , paper
      userWin = comChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

//computer choice
const genComChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const ranInx = Math.floor(Math.random() * 3);
  return options[ranInx];
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.id;
    playGame(userChoice);
  });
});
