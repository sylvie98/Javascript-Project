function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
        return userInput;
      } 
      else if(userInput === 'bomb'){
            return 'you won';
      }
      else {
        console.log('Error!');
      }
} 
function getComputerChoice(){
    const random = Math.floor(Math.random() *3);
    if (random === 0){
        return 'rock';
    }
    else if (random === 1){
        return 'paper';
    }
    else if(random ===2){
        return 'scissors';
    }
    else{
        return 'invalid'
    }
}
function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
        return 'game is a tie';
    } 
    else if(userChoice === 'rock'){
        if (computerChoice === 'paper'){
            return 'The computer won!'; 
        }
        else {
            return 'You won!';
          } 
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
          return 'The computer won!';
        } 
        else {
          return 'You won!';
        }
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'The computer won!';
        } 
        else {
          return 'You won!';
        }
      }
      if (userChoice === 'bomb'){
        return 'you won';
      }
      
}
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'

function playGame(){

    let  userChoice =getUserChoice('paper');
    let  computerChoice=getComputerChoice('rock');
    console.log('this is user choice'+' '+ userChoice);
    console.log('this is computer choice'+ ' '+ computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
