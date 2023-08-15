let off = 1;
 // invisible
toggleButtons();
toggleScore();

console.log("Score Board -  Off");
console.log("play buttons off");

// initially have play interface off
const plyr = document.querySelector('.plyrScore');
const cmpr = document.querySelector('.cmprScore');
const msg = document.querySelector('.msg');

// play buttons
function toggleButtons(){

  if (off) {
    document.querySelector('#rock').style.visibility = "hidden";
  }else{
    document.querySelector('#rock').style.visibility = "visible";
  }
 
  if (off) {
    document.querySelector('#paper').style.visibility = "hidden";
  }else{
    document.querySelector('#paper').style.visibility = "visible";
  }

  if (off) {
    document.querySelector('#scissors').style.visibility = "hidden";
  }else{
    document.querySelector('#scissors').style.visibility = "visible";
  }

  // Start New Game button = ON

  if (off) {
    document.querySelector('#start').style.visibility = "visible";
  }else{
    document.querySelector('#start').style.visibility = "hidden";
  }
}


function toggleScore(){
// toggle off scoreboard

  if (off) {
    document.querySelector('.plyrScore').style.visibility = "hidden";
  }else{
    document.querySelector('.plyrScore').style.visibility = "visible";
  }

  if (off) {
    document.querySelector('.msg').style.visibility = "hidden";
  }else{
    document.querySelector('.msg').style.visibility = "visible";
  }

  if (off) {
    document.querySelector('.cmprScore').style.visibility = "hidden";
  }else{
    document.querySelector('.cmprScore').style.visibility = "visible";
  }
}



const start = document.querySelector('#start');
start.addEventListener('click', ()=> {

  console.log("click Start");
  console.log("Toggle Score Board On");
  
  off = 0;
  toggleButtons();
  toggleScore();

  const h1 = document.querySelector('h1');
  if (h1){
    h1.innerText = "Choose Your Weapon"
  }
  message = "";
  displayMsg(message);

  getPlayerChoice();
});

// Rock Paper Scissors 
function getComputerChoice()
{
  console.log("get computer choice");

  let x =((Math.random()) * 100) // generate a random floating point #
  let out = 0;
  let choice = "";
  let frac = x % 1; // extract fractional part
  out = x - frac; // subtract fractional part - result is integer
  let message ="";
  // create choice 
  // dividing intergers (1 - 99) by 3 - assigning one choice to each 3rd 
  if (out <= 33){ 
    choice = "rock";
    message = "The Computer Selects : Rock"
    displayMsg(message);
  } else if (out <= 66){
    choice = "paper";
    message = "The Computer Selects : Paper"
  } else {
    choice = "scissors";
    message = "The Computer Selects : Scissors"
  }

  // status display
  console.log(message);

  displayMsg(message);
    
  return choice;
}


function playRound(playerSelection, computerSelection){

  console.log("playround")
   
  let p1 = playerSelection;

  console.log("Player chose = "+p1);

   
  let p2 = computerSelection;

  console.log("Computer chose = "+p2)

  let winner = ""; // the winner of the game
  let message = ""; // status display
  // the rules - also alerting the player of the game result
  if(p1 === p2){

    console.log("Draw!");

    winner = "Draw!";

    message = "Draw!";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    return winner;
  } else if(p1 === "paper" && p2 === "rock"){    

    console.log("You Win! Paper Covers Rock");
  
    message = "You Win! Paper Covers Rock";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    winner = "Player";

    console.log(winner);

    return winner;
  } else if(p1 === "rock" && p2 === "scissors"){

    console.log("You Win! Rock Smashes Scissors");

    message = "You Win! Rock Smashes Scissors";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    winner = "Player";

    console.log(winner);

    return winner;
  }else if(p1 === "scissors" && p2 === "paper"){

    console.log("You Win! Scissors Cuts Paper");

    message = "You Win! Scissors Cuts Paper";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    winner = "Player";

    console.log(winner);

    return winner;
  } else if(p1 === "rock" && p2 === "paper"){

    console.log("You Lose! Paper Covers Rock");
   
    message = "You Lose! Paper Covers Rock";
    setTimeout(() =>{displayMsg(message);;}, 2000);
     winner = "Computer";

    console.log(winner);
    
    return winner;
  } else if(p1 === "scissors" && p2 === "rock"){

    console.log("You Lose! Rock Smashes Scissors");
    
    message = "You Lose! Rock Smashes Scissors";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    winner = "Computer";

    console.log(winner);
    
    return winner;
  } else if(p1 === "paper" && p2 === "scissors"){

    console.log("You Lose! Scissors Cuts Paper");

    message = "You Lose! Scissors Cuts Paper";
    setTimeout(() =>{displayMsg(message);;}, 2000);
    winner = "Computer";

    console.log(winner);

    return winner;
  } 

}
    
function getPlayerChoice(){

  console.log ("enter getPlayersChoice");

  let playerSelection = "";
  let computerSelection = "";
  let message = "";
  
  // initialize scoreboard
  let scoreBoard = [];
  let p1 = 0;
  let p2 = 0;
  cnt = 0;
  updateScore(p1, p2);


  rock.addEventListener('click', ()=>{
    // this will indicate players choice of rock
    playerSelection = "rock";
    computerSelection = getComputerChoice();
    scoreBoard[cnt] = playRound(playerSelection, computerSelection);

    if (scoreBoard[cnt] === "Player"){
      //console.log (scoreBoard[cnt]);
      p1 ++;

      console.log(p1)

      updateScore(p1,p2);
    } else if ((scoreBoard[cnt] === "Computer")){

      console.log (scoreBoard[cnt]);

      p2++;

      console.log(p2);
      
      updateScore(p1,p2);
    } else { 
        //draw - do nothing
    }

    console.log(cnt);

    cnt ++;

    // first player to 5 wins
    if (p1 > 4){ 

      console.log ("player wins");

      message = "Player Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);
      displayResults(scoreBoard);
    }else if (p2 > 4){

      console.log ("computer wins");
      
      message = "Computer Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);
      displayResults(scoreBoard);
    }
  })

  paper.addEventListener('click', ()=>{
    // this will indicate players choice of paper
        playerSelection = "paper";
        computerSelection = getComputerChoice();
         scoreBoard[cnt] = playRound(playerSelection, computerSelection);
       if (scoreBoard[cnt] === "Player"){

          console.log (scoreBoard[cnt]);

          p1 ++;

          console.log(p1);

          updateScore(p1,p2);
       } else if ((scoreBoard[cnt] === "Computer")){

            console.log (scoreBoard[cnt]);
         
            p2++;

            console.log(p2);

            updateScore(p1,p2);
        } else { 
        //draw - do nothing
        }

        console.log(cnt);
        
        cnt ++;
        
          // first player to 5 wins
        if (p1 > 4){ 

          console.log ("player wins");
          
          message = "Player Wins!"
          setTimeout(() =>{displayMsg(message);;}, 3000);
          displayResults(scoreBoard);
        }else if (p2 > 4){

          console.log ("computer wins");
          
          message = "Computer Wins!"
          setTimeout(() =>{displayMsg(message);;}, 3000);
          displayResults(scoreBoard);
        }

  })

  scissors.addEventListener('click', ()=>{
    // this will indicate players choice of scissors
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    scoreBoard[cnt] = playRound(playerSelection, computerSelection);

    if (scoreBoard[cnt] === "Player"){
      console.log (scoreBoard[cnt]);
      p1 ++;

      console.log(p1);

      updateScore(p1,p2);
    } else if ((scoreBoard[cnt] === "Computer")){
      console.log (scoreBoard[cnt]);
      p2++;

      console.log(p2);
      updateScore(p1,p2);
    } else { 
      //draw - do nothing
    }

      console.log(cnt);

      cnt ++;

      // first player to 5 wins
    if (p1 > 4){ 

      console.log ("Player wins");

      message = "Player Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);
      displayResults(scoreBoard);
    }else if (p2 > 4){

      console.log ("Computer wins");
      
      message = "Computer Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);
      displayResults(scoreBoard);
    }
  })
}
function updateScore(p1, p2){

  console.log("update scoreboard displays");
  
  plyr.textContent = "Player = " + p1;
  cmpr.textContent = "Computer = " + p2;
}

function displayMsg(message){

  console.log("display gameplay message");
  
  msg.textContent = message;
}


      function displayResults(scoreBoard){
        off = 1;
        toggleButtons();

        console.log("toggleButtons()");
        console.log(scoreBoard);
        
      }



