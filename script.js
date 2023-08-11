

// initially have play interface off screen 
const h2 = document.querySelector('#h2');
if (h2.parentNode){
  h2.parentNode.removeChild(h2);
}
const rock = document.querySelector('#rock');
if (rock.parentNode){
  rock.parentNode.removeChild(rock);
}
const paper = document.querySelector('#paper');
if (paper.parentNode){
  paper.parentNode.removeChild(paper);
}
const scissors = document.querySelector('#scissors');
if (scissors.parentNode){
  scissors.parentNode.removeChild(scissors);
}

const start = document.querySelector('#start');

start.addEventListener('click', ()=> {

  const playScrn = document.querySelector('#play');
  if (playScrn){
    console.log(playScrn);
    playScrn.appendChild(h2);
  }

  if (start.parentNode) {
    start.parentNode.removeChild(start);

  const btnDiv = document.querySelector('.playBtns')
    if (btnDiv){
      //h2.parentNode.insertBefore(h2, playBtns);
      console.log(btnDiv);
      btnDiv.appendChild(rock);
      btnDiv.appendChild(paper);
      btnDiv.appendChild(scissors);
    
  
    }
  }
});






// Rock Paper Scissors 
    function getComputerChoice()
    {
      let x =((Math.random()) * 100) // generate a random floating point #
      let out = 0;
      let choice = "";
      let frac = x % 1; // extract fractional part
      out = x - frac; // subtract fractional part - result is integer
      
      // create choice 
      // dividing intergers (1 - 99) by 3 - assigning one choice to each 3rd 
      if (out <= 33){ 
        choice = "rock";
      } else if (out <= 66){
        choice = "paper";
      } else {
        choice = "scissors";
      }

      // console.log(choice);
      alert ("The Computer Selects : " + choice); // alert the player of the computer choice
      return choice;
    }


    function playRound(playerSelection, computerSelection){
     console.log("playround")
      let p1 = playerSelection;
       console.log("P1 = "+p1);
   
      let p2 = computerSelection;
       console.log("P2 = "+p2)

      let winner = ""; // the winner of the game
      
      // the rules - also alerting the player of the game result
      if(p1 === p2){
        console.log("Draw!");
        winner = "Draw!";
        alert("Draw!");
        return winner;
      } else if(p1 === "paper" && p2 === "rock"){
        console.log("You Win! Paper Beats Rock");
        alert("You Win! Paper Beats Rock");
        winner = "Player";
        console.log(winner);
        return winner;
      } else if(p1 === "rock" && p2 === "scissors"){
        console.log("You Win! Rock Beats Scissors");
        alert("You Win! Rock Beats Scissors");
        winner = "Player";
        console.log(winner);
        return winner;
      }else if(p1 === "scissors" && p2 === "paper"){
        console.log("You Win! Scissors Beats Paper");
        alert("You Win! Scissors Beats Paper");
        winner = "Player";
        console.log(winner);
        return winner;
      } else if(p1 === "rock" && p2 === "paper"){
        console.log("You Lose! Paper Beats Rock");
        alert("You Lose! Paper Beats Rock");
        winner = "Computer";
        console.log(winner);
        return winner;
      } else if(p1 === "scissors" && p2 === "rock"){
        console.log("You Lose! Rock Beats Scissors");
        alert("You Lose! Rock Beats Scissors");
        winner = "Computer";
        console.log(winner);
        return winner;
      } else if(p1 === "paper" && p2 === "scissors"){
        console.log("You Lose! Scissors Beats Paper");
        alert("You Lose! Scissors Beats Paper");
        winner = "Computer";
        console.log(winner);
        return winner;
      } 

    }
    
    function getPlayerChoice(){
      rock.addEventListener('click', ()=>{
        // this will indicate players choice of rock
        console.log('rock');
        return "rock";
      })
      paper.addEventListener('click', ()=>{
        // this will indicate players choice of paper
        console.log("paper");
         return "rock";
      })
      scissors.addEventListener('click', ()=>{
        // this will indicate players choice of scissors
        console.log("scissors");
         return "scissors";
      })
      }
  
      // this will save winner results in an array - 1st player to reach 5 points
    function playGame()
    {
      // console.log("playGame"); // diag
      const scoreBoard = []; //create score board array
      let p1 = 0;
      let p2 = 0;
      for (let cnt= 0; cnt < 20; cnt++)
      {
        // first player to 5 wins
        if (p1 > 4){ 
          console.log ("p1");
          console.log(scoreBoard);
          return scoreBoard;
        }else if (p2 > 4){
          console.log ("p2");
          console.log(scoreBoard);
          return scoreBoard;
        }
        console.log(cnt); //diag
        console.log("get choice 1")

        let playerSelection = getPlayerChoice(); 
        console.log(playerSelection);
          
        while (playerSelection === undefined) // if   player choice results in error
          {
            console.log("data entry error"); //diag
            console.log("get choice 2")

            playerSelection = getPlayerChoice();
          } 

          let computerSelection = getComputerChoice();

          scoreBoard[cnt] = playRound(playerSelection, computerSelection);

          if (scoreBoard[cnt] === "Player"){
            console.log (scoreBoard[cnt]);
            p1 ++;
            console.log(p1)
            continue;
          } else if ((scoreBoard[cnt] === "Computer")){
            console.log (scoreBoard[cnt]);
            p2++;
            console.log(p2)
            continue;
          } else{
            continue;
          }
          //this works 08-09-2023

      

      
    }
  }
  let result = getPlayerChoice();
  console.log(result);

  //playGame(); // the game
