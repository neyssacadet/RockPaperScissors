//Coding for computer to play randomly.
function computerPlay () {
    let options = ['rock','paper', 'scissors']; //this defines 'options'
    let randomnumber = Math.floor(Math.random() * options.length); // randomly picks a number value '0,1,2'
    return options[randomnumber]; //converts then returns number value into actual string value
}
console.log(computerPlay())//prints in the console

//Coding for player selection 
function playerPrompt(){
    let playerOne = window.prompt ("Choose between Rock, Paper, Scissors.");//Make sure no other option can be put in 
    return playerOne;//returns the player input
}

//Coding for a single round of Rock Paper Scissors. 
//Case where Player 1 Loses, Computer wins.
function singleround (player, computer){
    if (player == 'Rock' && computer == 'paper'){
        let message = 'You Lose! Paper beats Rock!';
        alert(message)
    }
}
console.log (singleround (playerPrompt(), computerPlay()))
