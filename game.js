                //  array with allthe letters
                var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            
                // Creating variables for number of wins, losses, and ties. 
                var wins = 0;
                var losses = 0;
                var guessesLeft = 10;
                var guessedLetters = [];
                var userguesses = 0;
            
                
                var computerChoiceText = document.getElementById("computerchoice-text");
                var winsText = document.getElementById("wins-text");
                var lossesText = document.getElementById("losses-text");
                var yourGuessesSoFarText = document.getElementById("yourguessessofar-text");
                var guessesLeftText = document.getElementById("guesseft-text");
                var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

                //do this instruction when user presses a key.
                 document.onkeyup = function(event) {
                     
            // console.log(guessesLeft)
                  // finds the key that was pressed.
                  var userGuess = event.key;
                  
                  if (guessedLetters.includes(userGuess)) {
                    alert("letter is already included")
                  }
                  //  Computer chooses a letter from the  array. 
                  // push userGuess value into guessesletters array
                  guessedLetters.push(userGuess);
                  //compares userGuess value eith the computerGuess value
                  
                  if ((userGuess === computerGuess))   {
                // add 1 to the wins variable
                    wins++;
                    guessesLeft = 10;
                    guessedLetters = [];
                    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    guessedLetters.push(userGuess);
                  }
                  // add 1 to the losses variable
                  else if ((userGuess !== computerGuess))   {
                    guessesLeft = guessesLeft - 1
                   if ( guessesLeft == 0 ) {
                       losses++;
                       guessesLeft = 10;
                       guessedLetters = [];

                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                    console.log(computerGuess);
                   }
                  }
                  
                    
            
                    // Display the user and computer guesses, and wins/losses/guesses left and userGuessHistory.
                    winsText.textContent = "wins: " + wins;
                    lossesText.textContent = "losses: " + losses;
                    guessesLeftText.textContent = "Guesses Left:" + guessesLeft;
                    yourGuessesSoFarText.textContent = "Your Guesses so Far:" + guessedLetters ;
            
                }