$(document).ready(function(){
  //find a way for the program to choose a random number between 1 and 100, save this as a variable
  var CurrentIndex = 100
  var click_count = 0
  randomIndex = Math.floor(Math.random()*100);
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
    //save their guess as a variable
    var userGuess = $('input').val();
    click_count = click_count+1 ;
    $('#guess_counter')
    console.log(click_count)
    console.log(userGuess)
    //and compare this guess to the random number that the computer picked
    //if the user guessed the correct number...
    if (userGuess == randomIndex){
      alert("You win")
    }
      //what happens if the guess is correct?
      
    //if the user guessed too high...
    else if (userGuess > randomIndex){
      alert("Guess Lower!")
    }
      //update the 'feedback' paragraph to tell them to guess lower
       //otherwise, the user guessed too low...
    else if (userGuess < randomIndex){
      alert("Guess Higher!")
    }
      //update the 'feedback' paragraph to tell them to guess higher
  });
});
