

// initially have play interface off screen 
// play buttons
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
// rounds won
const plyr = document.querySelector('.plyrScore');
if (plyr.parentNode){
  plyr.parentNode.removeChild(plyr);
}
const cmpr = document.querySelector('.cmprScore');
if (cmpr.parentNode){
  cmpr.parentNode.removeChild(cmpr);
}
const img = document.querySelector('.rps');
if (img.parentNode){
 // img.parentNode.removeChild(img); // leave image on screen
}


const start = document.querySelector('#start');
start.addEventListener('click', ()=> {

  if (start.parentNode) {
    start.parentNode.removeChild(start);
  }
  const btnDiv = document.querySelector('.playBtns')
  if (btnDiv){
    //console.log(btnDiv);
    btnDiv.appendChild(rock);
    btnDiv.appendChild(paper);
    btnDiv.appendChild(scissors);
    }
    
  const imgCont = document.querySelector('.imgContainer');
  
  if (imgCont){
    imgCont.appendChild(plyr);
    imgCont.appendChild(img); // re-add image
    imgCont.appendChild(cmpr);
  } 

    const h1 = document.querySelector('h1');
    if (h1){
      h1.innerText = "Choose Your Weapon"
    }
  
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
       console.log("Player chose = "+p1);
   
      let p2 = computerSelection;
       console.log("Computer chose = "+p2)

      let winner = ""; // the winner of the game
      
      // the rules - also alerting the player of the game result
      if(p1 === p2){
        console.log("Draw!");
        winner = "Draw!";
        alert("Draw!");
        return winner;
      } else if(p1 === "paper" && p2 === "rock"){
        console.log("You Win! Paper Covers Rock");
        alert("You Win! Paper Covers Rock");
        winner = "Player";
        console.log(winner);
        return winner;
      } else if(p1 === "rock" && p2 === "scissors"){
        console.log("You Win! Rock Smashes Scissors");
        alert("You Win! Rock Smashes Scissors");
        winner = "Player";
        console.log(winner);
        return winner;
      }else if(p1 === "scissors" && p2 === "paper"){
        console.log("You Win! Scissors Cuts Paper");
        alert("You Win! Scissors Cuts Paper");
        winner = "Player";
        console.log(winner);
        return winner;
      } else if(p1 === "rock" && p2 === "paper"){
        console.log("You Lose! Paper Covers Rock");
        alert("You Lose! Paper Covers Rock");
        winner = "Computer";
        console.log(winner);
        return winner;
      } else if(p1 === "scissors" && p2 === "rock"){
        console.log("You Lose! Rock Smashes Scissors");
        alert("You Lose! Rock Smashes Scissors");
        winner = "Computer";
        console.log(winner);
        return winner;
      } else if(p1 === "paper" && p2 === "scissors"){
        console.log("You Lose! Scissors Cuts Paper");
        alert("You Lose! Scissors Cuts Paper");
        winner = "Computer";
        console.log(winner);
        return winner;
      } 

    }
    
    function getPlayerChoice(){
      console.log ("enter getPlayersChoice");

      let playerSelection = "";
      let computerSelection = "";

      let scoreBoard = [];
      let p1 = 0;
      let p2 = 0;
      cnt = 0;


      rock.addEventListener('click', ()=>{
        // this will indicate players choice of rock
        //console.log('rock');
        playerSelection = "rock";
        computerSelection = getComputerChoice();
        scoreBoard[cnt] = playRound(playerSelection, computerSelection);

        if (scoreBoard[cnt] === "Player"){
          //console.log (scoreBoard[cnt]);
          p1 ++;
          console.log(p1)
       } else if ((scoreBoard[cnt] === "Computer")){
            //console.log (scoreBoard[cnt]);
            p2++;
            console.log(p2)
        } else { 
        //draw - do nothing
        }
        console.log(cnt);
        cnt ++;

     // first player to 5 wins
        if (p1 > 4){ 
          console.log ("player wins");
          displayResults(scoreBoard);
        }else if (p2 > 4){
          console.log ("computer wins");
          displayResults(scoreBoard);
        }
      })

      paper.addEventListener('click', ()=>{
        // this will indicate players choice of paper
      //  console.log("paper");
        playerSelection = "paper";
        computerSelection = getComputerChoice();
         scoreBoard[cnt] = playRound(playerSelection, computerSelection);
       if (scoreBoard[cnt] === "Player"){
          //console.log (scoreBoard[cnt]);
          p1 ++;
          console.log(p1)
       } else if ((scoreBoard[cnt] === "Computer")){
            //console.log (scoreBoard[cnt]);
            p2++;
            console.log(p2)
        } else { 
        //draw - do nothing
        }
        console.log(cnt);
        cnt ++;
        
          // first player to 5 wins
        if (p1 > 4){ 
          console.log ("player wins");
          displayResults(scoreBoard);
        }else if (p2 > 4){
          console.log ("computer wins");
          displayResults(scoreBoard);
        }

      })

      scissors.addEventListener('click', ()=>{
        // this will indicate players choice of scissors
        //console.log("scissors");
        playerSelection = "scissors";
        computerSelection = getComputerChoice();
        scoreBoard[cnt] = playRound(playerSelection, computerSelection);

      if (scoreBoard[cnt] === "Player"){
          //console.log (scoreBoard[cnt]);
          p1 ++;
          console.log(p1)
       } else if ((scoreBoard[cnt] === "Computer")){
            //console.log (scoreBoard[cnt]);
            p2++;
            console.log(p2)
        } else { 
        //draw - do nothing
        }
        console.log(cnt);
        cnt ++;
        
         // first player to 5 wins
        if (p1 > 4){ 
          console.log ("Player wins");
          displayResults(scoreBoard);
        }else if (p2 > 4){
          console.log ("Computer wins");
          displayResults(scoreBoard);
        }
      })
    }
  

      function displayResults(scoreBoard){

        console.log( "display results");

        console.log(scoreBoard);
        // this is where the results are displayed and the start new game will occure.
      }

getPlayerChoice();

