# rps
Rock, Paper, Scissors - Project 4

part I 

This project came together quickly, the hardest part being making the input immune to input errors. My origonal idea was to use radio buttons, but that's more for the second part.

I cleaned up the code, commenting out many of my diagnostic messages and adding comments. I double checked the design requirements. 

part II 

This Simple interface consists of 4 buttons, a single message display, a score display and choice display for each player. The buttons are displayed or hidden using the DOM – this effectively results in two interface sections: a start button interface, and a play interface. Initially the play interface is hidden and only the start button is displayed. One start is clicked, the start button is hidden, the play buttons are revealed and the game begins. Gameplay occurs within the “getPlayerChoice” function, when the player selects either rock. paper or scissors, this choice is saved to a variable and displayed beneath the players score. The program then randomly selects a choice, “getComputerChoice” using the random number generator function and a range of numbers to select it’s choice – which is saved in another variable and displayed below the computer score. These choices are both fed into another function “playRound”, which determines the winner based on the rules of the game – this is displayed in the message display along with the running score – play that results in a draw is awarded zero points. Play continues until either the player or the computer achieves 5 points, at which point the play interface buttons are hidden, the score and message displays remain on for a short period of time. Then the entire page is reloaded, resulting in the option to play again (start button displayed, play interface hidden) – gameplay can also be monitored using the console log which outlines each round of the gameplay.
C. Daykin - 08/2023 