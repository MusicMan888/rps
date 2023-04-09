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
        choice = "paper";
      } else if (out <= 66){
        choice = "rock";
      } else {
        choice = "scissors";
      }

      // console.log(choice);
      alert ("The Computer Selects : " + choice); // alert the player of the computer choice
      return choice;
    }


    function playRound(playerSelection, computerSelection){
      // console.log("playround")
      let p1 = playerSelection;
      // console.log("P1 = "+p1);
   
      let p2 = computerSelection;
      // console.log("P2 = "+p2)

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
      let choice = prompt("Choose Your Weapon : rock, paper or scissors");
      // console.log(choice);
      if(choice.toLowerCase() === "rock"){
        return choice.toLowerCase();
      } else if(choice.toLowerCase() === "paper"){
        return choice.toLowerCase();
      } else if(choice.toLowerCase() === "scissors"){
        return choice.toLowerCase();
      } else {
        alert("Sorry, Try Again");

      }
    }

      // this will save winner results in an array and loop through 5 rounds
    function playGame()
    {

      // console.log("playGame"); // diag

      const scoreBoard = []; //create score board array
     
      for(let cnt = 0; cnt < 5; cnt++)
      {
       
          // console.log(cnt); //diag
          // console.log("get choice 1")

          let playerSelection = getPlayerChoice(); 
          
          while (playerSelection === undefined) // if player choice results in error
          {
            // console.log("data entry error"); //diag
            // console.log("get choice 2")

            playerSelection = getPlayerChoice();
          } 

          let computerSelection = getComputerChoice();

          scoreBoard[cnt] = playRound(playerSelection, computerSelection);
      }

      console.log(scoreBoard);
      return scoreBoard;
    }
    
    playGame(); // the game 

