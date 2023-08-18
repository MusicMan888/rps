

let off = 1;
 // Game buttons invisible - start button visible
toggleButtons();
toggleScore();

console.log("Score Board off");
console.log("Play Buttons off");

// initially have play interface off
const plyr = document.querySelector('.plyrScore');
const cmpr = document.querySelector('.cmprScore');
const msg = document.querySelector('.msg');

// global declarations
  let ply1 = 0;
  let ply2 = 0;
 



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

function toggleButtonsOff(){

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

  // Start New Game button = OFF

  if (off) {
    document.querySelector('#start').style.visibility = "hidden";
  }else{
    document.querySelector('#start').style.visibility = "visible";
  }
}

function toggleScore(){
// toggle off score display - message display

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

//========================================= 

const start = document.querySelector('#start');
start.addEventListener('click', ()=> {
  console.log("============");
  console.log("click Start");

  console.log("Toggle Score-message board On");
  
  off = 0;
   // Game buttons visible - start button invisible
  toggleButtons(); // switch buttons
  toggleScore(); // turn on score

  const h1 = document.querySelector('h1');
  if (h1){
    h1.innerText = "Choose Your Weapon"
  }
  
  console.log("clear message display");
  message = "";
  displayMsg(message);

  getPlayerChoice();
});

//=========================================   

function getPlayerChoice(){

  console.log ("enter getPlayersChoice");

  let playerSelection = "";
  let computerSelection = "";
  
  let win = "";
  let message = "";

  ply1 = 0;
  ply2 = 0;

  updateScore(ply1, ply2);


  rock.addEventListener('click', ()=>{
    // this will indicate players choice of rock
    console.log("============");
    console.log("Player Chose Rock");


    playerSelection = "rock";
    computerSelection = getComputerChoice();
    win = playRound(playerSelection, computerSelection);

    if (win === "Player"){
    
      ply1 ++;
      win = "";
      updateScore(ply1,ply2);


    } else if (win === "Computer"){

      ply2++;
      win = "";
      updateScore(ply1,ply2);
      
    } else if (win === "Draw!"){
      updateScore(ply1,ply2);
    } else {
      alert ("Error - no result getPlayerChoice - rock");
    }

    // first player to 5 wins
    if (ply1 > 4){ 

      console.log ("player wins");

      message = "Player Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);
 
      win="";

      startOver();

    }else if (ply2 > 4){

      console.log ("computer wins");
      
      message = "Computer Wins!"
     
      setTimeout(() =>{displayMsg(message);;}, 3000);
  
      win="";
   
      startOver();
      
    }
  })

  paper.addEventListener('click', ()=>{
    // this will indicate players choice of paper
    console.log("============");
    console.log("player chose paper");
    
    playerSelection = "paper";
    computerSelection = getComputerChoice();
    win = playRound(playerSelection, computerSelection);
        
    if (win === "Player"){

      ply1 ++;
      win = "";
      updateScore(ply1,ply2);

    } else if (win === "Computer"){

      ply2++;
      win = "";
      updateScore(ply1,ply2);

    } else if (win === "Draw!"){
      updateScore(ply1,ply2);
    } else {
      alert ("Error - no result getPlayerChoice - paper");
    }

     
      // first player to 5 wins
    if (ply1 > 4){ 

      console.log ("player wins");
          
      message = "Player Wins!"
     
      setTimeout(() =>{displayMsg(message);;}, 3000);
   
      win="";

      startOver();

    }else if (ply2 > 4){

      console.log ("computer wins");
          
      message = "Computer Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);

      win="";
    
      startOver();
    }

  })

  scissors.addEventListener('click', ()=>{
    // this will indicate players choice of scissors
    console.log("============");
    console.log("player chose scissors");
  
    playerSelection = "scissors";
    computerSelection = getComputerChoice();
    win = playRound(playerSelection, computerSelection);
        

    if (win === "Player"){
     
      ply1 ++;
      win = "";
      updateScore(ply1,ply2);

    } else if (win === "Computer"){
      
      ply2++;
      win = "";
      updateScore(ply1,ply2);

    } else if (win === "Draw!"){
      updateScore(ply1,ply2);
    } else {
      alert ("Error - no result getPlayerChoice - scissors");
    }
  
      // first player to 5 wins
    if (ply1 > 4){ 

      console.log ("Player wins");

      message = "Player Wins!";
      setTimeout(() =>{displayMsg(message);;}, 3000);

      win="";
  
      startOver();

    }else if (ply2 > 4){

      console.log ("Computer wins");
      
      message = "Computer Wins!"
      setTimeout(() =>{displayMsg(message);;}, 3000);

      win="";

      startOver();
    }
  })
}
//=========================================    

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
    message = "The Computer Chose Rock"
    displayMsg(message);
  } else if (out <= 66){
    choice = "paper";
    message = "The Computer Chose Paper"
  } else {
    choice = "scissors";
    message = "The Computer Chose Scissors"
  }

  // status display
  console.log(message);

  displayMsg(message);
    
  return choice;
}

//=========================================    

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

    winner = "Draw!";

    console.log("playround winner = "+ winner);
        
    message = "Draw!";
    
    setTimeout(() =>{displayMsg(message);;}, 2000);

    return winner;

  } else if(p1 === "paper" && p2 === "rock"){    

    console.log("You Win! Paper Covers Rock");
  
    message = "You Win! Paper Covers Rock";
    
    setTimeout(() =>{displayMsg(message);;}, 2000);

    winner = "Player";

    console.log("playround winner = "+ winner);

    return winner;

  } else if(p1 === "rock" && p2 === "scissors"){

    console.log("You Win! Rock Smashes Scissors");

    message = "You Win! Rock Smashes Scissors";
   
    setTimeout(() =>{displayMsg(message);;}, 2000);

    winner = "Player";

    console.log("playround winner = "+ winner);

    return winner;

  }else if(p1 === "scissors" && p2 === "paper"){

    console.log("You Win! Scissors Cuts Paper");

    message = "You Win! Scissors Cuts Paper";
 
    setTimeout(() =>{displayMsg(message);;}, 2000);

    winner = "Player";

    console.log("playround winner = "+ winner);

    return winner;

  } else if(p1 === "rock" && p2 === "paper"){

    console.log("You Lose! Paper Covers Rock");
   
    message = "You Lose! Paper Covers Rock";

    setTimeout(() =>{displayMsg(message);;}, 2000);

    winner = "Computer";

    console.log("playround winner = "+ winner);
    
    return winner;

  } else if(p1 === "scissors" && p2 === "rock"){

    console.log("You Lose! Rock Smashes Scissors");
    
    message = "You Lose! Rock Smashes Scissors";
    
    setTimeout(() =>{displayMsg(message);;}, 2000);

    winner = "Computer";
    
    console.log("playround winner = "+ winner);

    return winner;

  } else if(p1 === "paper" && p2 === "scissors"){

    console.log("You Lose! Scissors Cuts Paper");

    message = "You Lose! Scissors Cuts Paper";
  
    setTimeout(() =>{displayMsg(message);;}, 2000);
    
    winner = "Computer";

    console.log("playround winner = "+ winner);

    return winner;
  } 
}

function updateScore(ply1, ply2){
  console.log("update score function");

  console.log("Player = " + ply1);
  console.log("Computer = " + ply2);
  
  plyr.textContent = "Player = " + ply1;
  cmpr.textContent = "Computer = " + ply2;
}

function displayMsg(message){
  //console.log("display gameplay message - displayMsg");
  msg.textContent = message;
}


function startOver(){
  console.log("toggleButtonsOff()");
  off = 1;
  toggleButtonsOff();

  console.log("Restart");
  setTimeout(() =>{location.reload();;}, 7000);
}



